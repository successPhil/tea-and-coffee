import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { userDataFetch, removeFavorite } from '../api/dataApi';

export default function Favorites(){
    const [ userData, setUserData ] = useState(null)
    const [ favorites, setFavorites ] = useState(null)

    const capitalizeWords = (str) => {
        return str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };

    const getUserData = async () => {
        const fetchedData = await userDataFetch();
        setUserData(fetchedData)
        setFavorites(fetchedData.favorites)
    }

    const removeFromFavorites = async (coffeeId) => {
        const update = await removeFavorite(coffeeId)
        setFavorites((prevFavorites) => prevFavorites.filter((coffee) => coffee.id !== coffeeId));
    }
    
    console.log(favorites, 'THESE ARE FAVORITES MY FAVORITES')
    useEffect(() => {
        getUserData()
    }, [])



    return (
        <div className='container' style={{ maxWidth: '70%' }}>
      <div className="row">
        {userData &&
          favorites &&
          favorites?.map((coffee) => (
            <div key={coffee.id} className="col-lg-12 mb-4">
              <div className="card h-100">
                <div className="row g-0">
                  {/* Thumbnail */}
                  <div className="col-md-2">
                    <img
                      src={coffee.picture}
                      alt={coffee.name}
                      style={{height: '200px'}}
                      className="img-thumbnail"
                    />
                  </div>
                  {/* Card Body */}
                  <div className="col-md-8 mx-auto">
                    <div className="card-body d-flex flex-column h-100">
                      {/* Title */}
                      <h5 className="card-title">
                        {capitalizeWords(coffee.name)}
                      </h5>
                      {/* Description (visible only on large screens) */}
                      <p className="card-text d-none d-md-block">
                        {coffee.description}
                      </p>
                      {/* Reviews, Likes, Remove (visible on small screens) */}
                      <div className="mt-auto">
                        <div className="d-flex">
                          <button className="btn btn-primary me-2">
                            Reviews
                          </button>
                          <button className="btn btn-success mr-2">Likes</button>
                          <div className="flex-grow-1"></div>{" "}
                          {/* This will push the "Remove" button to the right */}
                          <button className="btn btn-danger" onClick={() => removeFromFavorites(coffee.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='card'>
        <h1>Its me, your favorite!</h1>
      </div>
    </div>
  );
}