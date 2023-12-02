import { coffeeFetch, addCoffeeReview } from "../api/dataApi"
import { useEffect, useState, useRef } from "react"
import Rating from '@mui/material/Rating';
import SeeReview from '../features/Coffee/SeeReview'
import AddCoffee from "../features/Coffee/AddCoffee"
import AddReview from "../features/Coffee/AddReview";
import EditReview from "../features/Coffee/EditReview";
import '../index.css'

export default function Coffee() {
    const [ coffees, setCoffees ] = useState([])
    const [ addCoffeeForm, setAddCoffeeForm ] = useState(false)
    const [ openReviewIndex, setOpenReviewIndex] = useState (null)
    const [ addReviewForm, setAddReviewForm ] = useState(false)
    const [ editReviewForm, setEditReviewForm ] = useState(false)
    const [selectedCoffeeId, setSelectedCoffeeId] = useState(null);
    const [selectedUserReview, setSelectedUserReview] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    // const currentUser = localStorage.getItem("username")

    const handleAddCoffee = () => {
        setAddCoffeeForm(!addCoffeeForm)
    }
    console.log('rendering coffee')

    const handleAddReview = (coffeeId) => {
        console.log("Toggling addReviewForm");
        setSelectedCoffeeId(coffeeId)
        setAddReviewForm(!addReviewForm)
    }

    const handleEditReview = (coffeeId, userReview) => {
        setSelectedCoffeeId(coffeeId)
        setSelectedUserReview(userReview)
        setEditReviewForm(!editReviewForm)
    }

    useEffect(() => {
        getCoffeeData()
        const username = localStorage.getItem("username")
        setCurrentUser(username)
    }, [editReviewForm, addReviewForm])


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
            const userReview = coffee.reviews.find(review => review.user.username === currentUser)
            const hasUserReview = !!userReview

            const buttonHandler = hasUserReview ? () => handleEditReview(coffee.id, userReview) : () => handleAddReview(coffee.id)
            const buttonId = hasUserReview ? 'edit-review-button' : 'add-review-button'

            return (

                <div key={index}>
                    <div className="coffee-card">
                        <div className="coffee-header-image">
                            <img className="coffee-thumbnail" src={coffee.picture}/>
                        </div>
                        <div className="coffee-interactive-info">
                            <h1>{capitalizeWords(coffee.name)}</h1> 
                            <p>{coffee.description}</p>
                            <div className="interactive-footer">
                                <h4>{coffee.rating}<Rating name="read-only" value={coffee.rating}readOnly/></h4>
                                <h4>Caffeine - {coffee.caffeine}mg/Serving</h4>
                                <h4>Recipe</h4>
                                <h4 className='interactive-h4' onClick={() => handleViewReviews(index)}> {index == openReviewIndex ? 'Close Reviews' : 'See Reviews'}</h4>
                                <h4 className='interactive-h4' id={buttonId} onClick={buttonHandler}>
                                    {hasUserReview ? 'Edit Review' : 'Add Review'}
                                </h4>
                            </div>
                        </div>
                    </div>
                {openReviewIndex == index && (<SeeReview coffee={coffees[openReviewIndex]}/>)}
                </div>
                )
            })
        }

    const getCoffeeData = async () => {
        const fetchedCoffees = await coffeeFetch();
        setCoffees(fetchedCoffees)
    }

    return (
    <div className="coffee-page">
    <div className="add-a-coffee">
        <h2>Take A Gander at our premium coffees. If what you want is not here, Add it! </h2>
        <button id="add-coffee-button" onClick={handleAddCoffee}>add coffee</button>
    </div>

    {coffees && createCoffeeList()}
    {addCoffeeForm && <AddCoffee handleAddCoffee={handleAddCoffee}/>}
    {addReviewForm && <AddReview handleAddReview={handleAddReview} coffeeId={selectedCoffeeId} />}
    {editReviewForm && <EditReview handleEditReview={handleEditReview} coffeeId={selectedCoffeeId} selectedUserReview={selectedUserReview} editReviewForm={editReviewForm}/>}
   

    </div>)
}