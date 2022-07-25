import * as styles from '../../../styles/navMenu.module.css';
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby"
import clsx from "clsx"

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState(styles.closedMenu);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuClass(styles.openMenu);
      return;
    } else {
      setMenuClass(styles.closedMenu);
    }

  }, [isMenuOpen]);

  return (
    <nav>
      {isMenuOpen ? (
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.iconWrapper}
          size={'xl'}
          onClick={handleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.iconWrapper}
          size={'xl'}
          onClick={handleMenu}
        />
      )}
      <aside className={clsx([styles.menuWrapper, menuClass])}>
        <ul className={styles.navMenuUl}>
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
        </ul>
      </aside>
    </nav>
  );
}

export default NavMenu;