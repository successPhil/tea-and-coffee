import '../../components/css/CoffeeReviews.css'


export default function SeeReview({coffee}) {


    return (
        <>
        {coffee.reviews.length !== 0 ?
        <div className='reviews-container'>
            <h1> Reviews </h1>
            {coffee.reviews.map(( review, index ) => (
                <div key={index} className='review-container'>
                    <h2>{review.user.username}</h2>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
        :
        <div className="no-review-error">No Reviews to Display</div>
        }
        </>
    )
}