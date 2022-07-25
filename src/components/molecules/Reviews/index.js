import * as styles from '../../../styles/reviews.module.css';
import * as React from "react";
import useReviews from "../../../hooks/useReviews"
import ReviewCard from "../../atoms/ReviewCard"

const Reviews = () => {
  const allReviews = useReviews();


  return (
    <section className={styles.reviewsWrapper}>
      <div className={styles.reviewsGridContainer}>
        {allReviews.map((r,i) => (
          <ReviewCard key={`review-${i}`}review={r} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;