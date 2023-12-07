import { Rating } from "@mui/material"
export default function ReviewCard  ({review} ) {
  
    return (
        <>
        <div className="card m-3">
      <div className="card-body rounded" style={{ backgroundColor: 'rgba(180, 112, 52, 0.5)', border: '3px solid #3C180E', color: '#3C180E'}}>
        <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{review.user.username}</h5>
            <Rating name="read-only" size="small" value={review.rating} readOnly />
        </div>
          <div className="d-flex flex-row-reverse me-2">
            <p className="mb-0">Likes: {review.liked_by.length}</p>
          </div>
        <p className="card-text">{review.text}</p>
      </div>
    </div>
        </>
    )

}