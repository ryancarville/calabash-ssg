import * as styles from '../../../../styles/reviewDialog.module.css';
import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';

const ReviewDialog = ({review, handleCloseClick}) => {



  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className={styles.text}>{children}</p>;
      }
    }
  };
  // make rating stars
  const makeRating = () => {
    let allStars = [];
    let count = 0;
    while (allStars.length < review.rating) {
      allStars.push(
        <FontAwesomeIcon
          key={`${review.reviewerName}-rating-${count}`}
          icon={faStar}
          size={'lg'}
          className={styles.starWrapper}
        />
      );
      count++;
    }
    return allStars;
  };

  return (
    <div className={styles.dialogCardWrapper}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.closeButtonWrapper}
        size={'xl'}
        onClick={() => handleCloseClick(false)}
      />
      <div className={styles.dialogCardContentWrapper}>
        <div className={styles.userInfoWrapper}>
          <img
            src={review.photo.file.url}
            alt={review.photo.file.fileName}
            className={styles.photoWrapper}
          />
          <span className={styles.flexCenter}>
            {makeRating(review.rating)}
          </span>
          <p className={styles.pDefault}>{review.reviewerName}</p>
          <p className={styles.pDefault}>{review.date}</p>
        </div>

        {renderRichText(review.text, options)}
      </div>
    </div>
  );
};

export default ReviewDialog;
