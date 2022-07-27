import * as styles from '../../../cssModules/footer.module.css'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby'
export default function Footer() {

  return (
    <footer className={styles.footerWrapper}>
      <Link to={'/'}>
        <StaticImage
          src={'../../../images/calabash_logo_social.jpg'}
          className={styles.logoWrapper}
          alt={'logo'}
        />
      </Link>
      <ul className={styles.linksWrapper}>
        <li>
          <Link to={'/'} className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/house'} className={styles.link}>
            House
          </Link>
        </li>
        <li>
          <Link to={'/defender'} className={styles.link}>
            Defender
          </Link>
        </li>
        <li>
          <Link to={'/bequia'} className={styles.link}>
            Bequia
          </Link>
        </li>
        <li>
          <Link to={'/about'} className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to={'/contact'} className={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to={'/reservations'} className={styles.link}>
            Rates + Reservation
          </Link>
        </li>
        <li>
          <a
            href={'https://www.airbnb.com/users/show/326390723'}
            target={'_blank'}
            rel='noreferrer'
            className={styles.link}
          >
            AirBnb
          </a>
        </li>
        <li>
          <a
            href={'https://www.instagram.com/calabashvillabequia/'}
            target={'_blank'}
            rel='noreferrer'
            className={styles.link}
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href={'https://www.facebook.com/calabashbequia/'}
            target={'_blank'}
            rel='noreferrer'
            className={styles.link}
          >
            Facebook
          </a>
        </li>
      </ul>
    </footer>
  );
}
