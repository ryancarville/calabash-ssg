import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import ReviewDialog from "../../organism/Dialogs/ReviewDialog"
import * as styles from '../../../styles/reviewCard.module.css'
import Dialog from "../Dialog"

const ReviewCard = (props) => {
  const {review} = props;
  const [openReview, setOpenReview] = useState(false);

  // make rating stars
  const makeRating = () => {
    let allStars = [];
    let count = 0;
    while (allStars.length < review.rating) {
      allStars.push(<FontAwesomeIcon key={`${review.reviewerName}-rating-${count}`} icon={faStar} size={'lg'} className={styles.starWrapper} />);
      count++;
    }
    return allStars;
  }

return (
  <>
    <div className={styles.cardWrapper}>
      <div className={styles.userInfoWrapper}>
        <img
          src={review.photo.file.url}
          alt={review.photo.file.fileName}
          className={styles.photoWrapper}
        />
        <span className={styles.flexCenter}>{makeRating(review.rating)}</span>
        <p className={styles.pDefault}>{review.reviewerName}</p>
        <p className={styles.pDefault}>{review.date}</p>
      </div>
      <span className={styles.flexCenterColumn}>
        <p className={styles.snippetText}>"{review.textSnippet.textSnippet}"</p>
        <button
          className={styles.buttonWrapper}
          onClick={() => setOpenReview(!openReview)}
        >
          Full Review
        </button>
      </span>
    </div>
    {openReview && (
      <Dialog>
        <ReviewDialog review={review} handleCloseClick={setOpenReview} />
      </Dialog>
    )}
  </>
);
}

export default ReviewCard;