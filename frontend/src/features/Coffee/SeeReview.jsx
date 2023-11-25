import '../../components/css/CoffeeReviews.css'


export default function SeeReview({coffee}) {


    return (
        <>
        {coffee.reviews.length !== 0 ?
        <div className='review-container'>
            <div className='review-profile-container'>
                <div className='review-avatar'></div>
            </div>
            {coffee.reviews.map(( review, index ) => (
                <>
                    <div key={index}>{review.user.username}</div>
                    <p key={index}>{review.text}</p>
                </>
            ))}
        </div>
        :
        <div className="no-review-error">No Reviews to Display</div>
        }
        </>
    )
}