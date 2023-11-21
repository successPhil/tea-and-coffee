import '../../components/css/CoffeeReviews.css'


export default function SeeReview({coffee}) {

    // const coffee = [
    //     "Mesmerizing cosmic journey. Must-read!",
    //     "Savor Fusion: Culinary delight gem.",
    //     "Whispers of Time: Timeless cinematic",
    //     "EcoCharge: Compact, efficient, eco-friendly lifesaver.",
    //     "Serenity Cove: Hidden paradise, pure bliss."
    //   ];

    return (
        <>
        {coffee.reviews.length !== 0 ?
        <div className='review-container'>
            <div className='review-profile-container'>
                <div className='review-avatar'></div>
                <div className='review-username'>UserName</div>
            </div>
            {coffee.reviews.map(( review, index ) => (
                <p key={index}>{review}</p>
            ))}
        </div>
        :
        <div className="no-review-error">No Reviews to Display</div>
        }
        </>
    )
}