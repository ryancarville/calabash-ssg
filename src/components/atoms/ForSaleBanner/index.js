import React from 'react'
import * as styles from '../../../cssModules/forSaleBanner.module.css'
const ForSaleBanner = () => {
  return (
    <div className={styles.forSaleBannerWrapper}>
      <h2>For Sale!</h2>
      <span>Email us <a href='mailto:calabashbequia@gmail.com?subject=Purchase Enquiry'>here</a> for more details</span>
    </div>
  );
}
export default ForSaleBanner;