import React, { useState, useEffect } from 'react' 
import ReviewCard from './ReviewCard'
import NewReview from './NewReview'

const API = 'http://localhost:3000'

export default function Review({ user }) {
  const [reviews, setReviews] = useState([])
 
  useEffect(() => {
  fetch(`${API}/reviews`)
  .then(res => res.json())
  .then(reviews => setReviews(reviews))
}, [])

function handleDeleteReview(id) {
    const updatedReviewArray = reviews.filter(review => review.id !== id)
    setReviews(updatedReviewArray)
}

// function handleUpdateReview(updatedReview) {
//   const updatedReviewArray = reviews.map(review => {
//     return review.id === updatedReview.id ? updatedReview : review
//   })
//   setReviews(updatedReviewArray)
// }

  return(
    <div>
      <NewReview reviews={reviews} user={user} />
      {
        reviews.map(reviews => <ReviewCard key={reviews.id} reviews={reviews} setReviews={setReviews} user={user} onDeleteReview={handleDeleteReview} />)
      }
    </div>
  )
}