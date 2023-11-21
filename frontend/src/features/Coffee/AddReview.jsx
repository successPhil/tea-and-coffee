import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { addCoffeeReview } from "../../api/dataApi";

export default function AddReview({ coffeeId }) {
  const navigate = useNavigate();
  const { userToken } = useContext(UserContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState(null);

  const handleTextChange = (e) => setText(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      coffee_id: coffeeId,
      text: text,
      rating: rating,
    };

    console.log(reviewData)

    try {
      await addCoffeeReview(reviewData);
      // Optionally, you can navigate or update the UI in other ways
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h1>Add a Review</h1>
          {errors && <h4>{JSON.stringify(errors)}</h4>}

          <div className="share-input">
            <textarea
              className="input-description"
              placeholder="Review Text"
              value={text}
              onChange={handleTextChange}
            ></textarea>
          </div>

          <div className="share-input">
            <input
              placeholder="Rating"
              value={rating}
              onChange={handleRatingChange}
            ></input>
          </div>

          <div className="share-submit">
            <button className="share-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
