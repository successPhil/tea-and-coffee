import { coffeeFetch } from "../api/dataApi"
import { useEffect, useState } from "react"
import Rating from '@mui/material/Rating';
import SeeReview from '../features/Coffee/SeeReview'
import AddCoffee from "../features/Coffee/AddCoffee"

export default function Coffee() {
    const [ coffees, setCoffees ] = useState([])
    const [ addCoffeeForm, setAddCoffeeForm ] = useState(false)
    const [ openReviewIndex, setOpenReviewIndex] = useState (null)

    const handleAddCoffee = () => {
        setAddCoffeeForm(true)
    }

    useEffect(() => {
        getCoffeeData()
    }, [])

    const capitalizeWords = (str) => {
        return str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };

    const handleViewReviews = (index) => {
        if (index == openReviewIndex) {
            setOpenReviewIndex(null)
        } else {
            setOpenReviewIndex(index)
        }
    }

    const createCoffeeList = () => {
        return coffees.map( (coffee, index) => {
            return (
                <>
                    <div key={index} className="coffee-card">
                        <div className="coffee-header-image">
                            <h1>{capitalizeWords(coffee.name)}</h1>
                            <img className="coffee-thumbnail" src={coffee.picture}/>
                        </div>
                        <div className="coffee-interactive-info">
                            <p>{coffee.description}</p>
                            <div className="interactive-footer">
                                <h4>{coffee.rating}<Rating name="read-only" value={coffee.rating} readOnly/></h4>
                                <h4>Caffeine - {coffee.caffeine}mg/Serving</h4>
                                <h4>Recipe</h4>
                                <h4 onClick={() => handleViewReviews(index)}> {index == openReviewIndex ? 'Close Reviews' : 'See Reviews'}</h4>
                                <h4> + Add Review</h4>
                            </div>
                        </div>
                    </div>
                {openReviewIndex == index && (<SeeReview coffee={coffees[openReviewIndex]}/>)}
                </>
                )
            })
        }

    const getCoffeeData = async () => {
        const fetchedCoffees = await coffeeFetch();
        setCoffees(fetchedCoffees)
    }

    console.log(coffees)
    
    return (
    <>
    <div className="add-a-coffee">
        <h2>Take A Gander at our premium coffees. If what you want is not here, Add it! </h2>
        <button onClick={handleAddCoffee}>add coffee</button>
    </div>

    {coffees && createCoffeeList()}
    {addCoffeeForm && <AddCoffee/>}

    </>)
}