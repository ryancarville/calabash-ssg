import * as styles from '../../../cssModules/reviews.module.css';
import * as React from "react";
import useReviews from "../../../hooks/useReviews"
import ReviewCard from "../../atoms/ReviewCard"

const Reviews = () => {
  const allReviews = useReviews();
  const totalCount = allReviews.length;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  const orderedReviews = (a,b) => {
      const aDate = a.date.split(' ');
      const bDate = b.date.split(' ');

      const aMonth = aDate[0];
      const aYear = +aDate[1];
      const bMonth = bDate[0];
      const bYear = +bDate[1];

      if (aYear !== bYear) {
        return bDate - aDate;
      } else {
        return months.indexOf(bMonth) - months.indexOf(aMonth);
      }
  };
  allReviews.sort(orderedReviews);

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