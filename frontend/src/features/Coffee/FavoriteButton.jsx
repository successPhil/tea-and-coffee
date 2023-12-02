import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addFavorite, removeFavorite } from '../../api/dataApi';
import { useState } from 'react';
export default function FavoriteButton( { coffee, isFavorite }) {
    const [ favorite, setFavorite ] = useState(isFavorite)
    

    const handleToggleFavorite = () => {
        if (favorite){
            removeFromFavorites(coffee.id)
        } else {
            addToFavorites(coffee.id)
        }
      };

    const addToFavorites = async (coffeeId) => {
        await addFavorite(coffeeId)
        setFavorite(true)
    }

    const removeFromFavorites = async (coffeeId) => {
        await removeFavorite(coffeeId)
        setFavorite(false)
    }

    return (
        <>
        <button onClick={handleToggleFavorite}>{favorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}</button>
        </>
    )
}