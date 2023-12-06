import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ReviewList({ reviews, toggleListVisibility }) {
  const { coffees } = useContext(UserContext);

  const capitalizeWords = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Check if reviews is an array and has at least one item
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;

  // Check if coffees is defined
  const hasCoffees = typeof coffees !== "undefined";

  // Check if selectedCoffee can be found in coffees
  const selectedCoffee =
    hasReviews && hasCoffees && coffees.find((coffee) => coffee.id === reviews[0].coffee);

  // Only render if reviews is an array, has at least one item, coffees is defined, and selectedCoffee is found
  if (hasReviews && hasCoffees && selectedCoffee) {
    return (
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content" style={{ width: "45%", height: "600px" }}>
          <div className="modal-header">
            <h5 className="modal-title text-center w-100">{capitalizeWords(selectedCoffee.name)} Reviews</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleListVisibility}></button>
          </div>
          <div className="modal-body overflow-auto">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default case when conditions are not met
  return null;
}
