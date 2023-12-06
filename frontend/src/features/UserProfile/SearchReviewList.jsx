import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import UserSearchCard from "./UserSearchCard";

export default function SearchReviewList({ searchReviews, toggleListVisibility }) {
  const { coffees } = useContext(UserContext);

  const capitalizeWords = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const selectedCoffee =
    searchReviews &&
    searchReviews.length > 0 &&
    coffees &&
    coffees.find((coffee) => coffee.id === searchReviews[0].coffee);

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      {selectedCoffee && (
        <div className="modal-content" style={{ width: "45%", height: "600px" }}>
          <div className="modal-header">
            <h5 className="modal-title text-center w-100">
              {capitalizeWords(selectedCoffee.name)} Reviews
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={toggleListVisibility}
            ></button>
          </div>
          <div className="modal-body overflow-auto">
            {searchReviews?.map((review) => (
              <UserSearchCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
