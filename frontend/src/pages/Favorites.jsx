// Favorites.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { userDataFetch, removeFavorite, userSearchFetch } from '../api/dataApi';
import FavoritesCard from '../features/Favorites/FavoritesCard';
import UserSearchCard from '../features/UserProfile/UserSearchCard';
import SearchProfile from '../features/UserProfile/SearchProfile';

export default function Favorites() {
  const [userData, setUserData] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [selectedCoffee, setSelectedCoffee] = useState([]);
  const [likesTotalList, setLikesTotalList] = useState([]);
  const [likesTotalCount, setLikesTotalCount] = useState(0);
  const [showLikesInfo, setShowLikesInfo] = useState(false);
  const [isListVisible, setListVisible] = useState(false);
  const [searchFavorites, setSearchFavorites ] = useState([])
  const [ searchReviews, setSearchReviews ] = useState([])
  const [searchData, setSearchData] = useState(null);
  const [searchInfo, setSearchInfo] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  console.log(searchInfo)
  console.log(searchData)
  console.log(searchFavorites)

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleSearchUser = async (searchInfo) => {
    const fetchedData = await userSearchFetch(searchInfo);
    setSearchData(fetchedData);
    setSearchFavorites(fetchedData.favorites);
    setIsSearching(true);
    toggleListVisibility();
  };

  const handleSearchChange = (e) => {
    setSearchInfo(e.target.value);
  };

  const handleReviews = (reviews) => {
    setReviews(reviews);
    toggleListVisibility();
  };

  const handleSearchReviews = (reviews) => {
    console.log(reviews,'INSIDE HANDLE SEARCH REVIEWS' )
    setSearchReviews(reviews);
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
        <SearchProfile
          handleSearchUser={handleSearchUser}
          handleSearchChange={handleSearchChange}
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
        />
        {showLikesInfo && (
          <div className="modal-favorites">
            <div className="modal-content">
              <span className="close" onClick={handleClose}>
                &times;
              </span>
              <h6>{capitalizeWords(selectedCoffee.name)}</h6>
              <p>Total Likes: {likesTotalCount}</p>
              <p>Liked by: {likesTotalList.join(', ')}</p>
            </div>
          </div>
        )}
        <div className="row">
        {/* <UserSearchCard
              searchFavorites={searchFavorites}
              searchReviews={searchReviews}
              handleSearchReviews={handleSearchReviews}
              isSearching={isSearching}
              handleLikes={handleLikes}
              isListVisible={isListVisible}
              toggleListVisibility={toggleListVisibility}
            /> */}
          {isSearching ? (
            <UserSearchCard
              searchFavorites={searchFavorites}
              searchReviews={searchReviews}
              handleSearchReviews={handleSearchReviews}
              isSearching={isSearching}
              handleLikes={handleLikes}
              isListVisible={isListVisible}
              toggleListVisibility={toggleListVisibility}
            />
          ) : (
            <FavoritesCard
              favorites={favorites}
              handleReviews={handleReviews}
              handleLikes={handleLikes}
              removeFromFavorites={removeFromFavorites}
              isListVisible={isListVisible}
              toggleListVisibility={toggleListVisibility}
              reviews={reviews}
            />
          )}
        </div>
      </div>
    </>
  );
}
