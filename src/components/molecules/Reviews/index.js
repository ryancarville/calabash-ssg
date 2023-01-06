import * as styles from '../../../cssModules/reviews.module.css';
import * as React from "react";
import useReviews from "../../../hooks/useReviews"
import ReviewCard from "../../atoms/ReviewCard"

const Reviews = () => {
  const allReviews = useReviews();
  const totalCount = allReviews.length;

  return (
    <section className={styles.reviewsWrapper}>
      <div className={styles.reviewsGridContainer}>
        {allReviews.map((r,i) => (
          <ReviewCard
            key={`review-${i}`}
            review={r}
            totalCount={totalCount}
            currentIdx={i+1}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;