// Favorites.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { userDataFetch, removeFavorite, userSearchFetch } from '../api/dataApi';
import FavoritesCard from '../features/Favorites/FavoritesCard';
import UserSearchCard from '../features/UserProfile/UserSearchCard';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const navigate = useNavigate()
  const {userData, setUserData, userSearchData, setUserSearchData, searchInfo, setSearchInfo } = useContext(UserContext)
  const [favorites, setFavorites] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [selectedCoffee, setSelectedCoffee] = useState([]);
  const [likesTotalList, setLikesTotalList] = useState([]);
  const [likesTotalCount, setLikesTotalCount] = useState(0);
  const [showLikesInfo, setShowLikesInfo] = useState(false);
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleSearchUser = async (searchInfo) => {
    const fetchedData = await userSearchFetch(searchInfo);
    setUserSearchData(fetchedData);
    toggleListVisibility();
    navigate('/userSearch')
  };

  const handleSearchChange = (e) => {
    setSearchInfo(e.target.value);
  };

  const handleReviews = (reviews) => {
    setReviews(reviews);
    toggleListVisibility();
  };


  const handleClose = () => {
    setShowLikesInfo(false);
  };

  const handleLikes = (coffee) => {
    setSelectedCoffee(coffee);
    const reviews = coffee.reviews;
    const uniqueUsernames = new Set();

    reviews.forEach((review) => {
      if (review.liked_by && review.liked_by.length > 0) {
        review.liked_by.forEach((username) => {
          uniqueUsernames.add(username);
        });
      }
    });

    setLikesTotalList([...uniqueUsernames]);
    setLikesTotalCount(uniqueUsernames.size);
    setShowLikesInfo(true);
  };

  const capitalizeWords = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getUserData = async () => {
    const fetchedData = await userDataFetch();
    setUserData(fetchedData);
    setFavorites(fetchedData.favorites);
  };

  const removeFromFavorites = async (coffeeId) => {
    await removeFavorite(coffeeId);
    setFavorites((prevFavorites) => prevFavorites.filter((coffee) => coffee.id !== coffeeId));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className='container' style={{ maxWidth: '70%' }}>
      <h2>Search to find what other users have added to their favorites list!</h2>
      <div className="d-flex justify-content-center align-items-center">
        <input value={searchInfo} onChange={handleSearchChange}></input>
        <button className="btn btn-success m-2" onClick={() => handleSearchUser(searchInfo)}>
          Search User
        </button>
      </div>
        {showLikesInfo && (
          <div className="popup-favorites">
            <div className="popup-likes-center bg-warning-subtle rounded p-1">
              <span className="close align-self-end" onClick={handleClose}>
                &times;
              </span>
              <h6 className='text-center'>{capitalizeWords(selectedCoffee.name)}</h6>
              <p className='px-4'>Total Likes: {likesTotalCount}</p>
              <p className='px-4'>Liked by: {likesTotalList.join(', ')}</p>
            </div>
          </div>
        )}
        <div className="row">
            <FavoritesCard
              favorites={favorites}
              handleReviews={handleReviews}
              handleLikes={handleLikes}
              removeFromFavorites={removeFromFavorites}
              isListVisible={isListVisible}
              toggleListVisibility={toggleListVisibility}
              reviews={reviews}
            />
        </div>
      </div>
    </>
  );
}
