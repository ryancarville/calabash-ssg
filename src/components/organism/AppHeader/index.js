import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import NavMenu from "../../molecules/NavMenu"
import ForSaleBanner from "../../atoms/ForSaleBanner"

const AppHeader = () => {

  const appHeaderWrapper = {
    width: '100%',
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1000
  };

  const appHeaderSpan = {
    width: '20rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    backgroundColor: 'white',
  };

  const logoWrapper = {
    width: 150,
    cursor: "pointer"
  }

  return (
    <div style={appHeaderWrapper}>
      <Link to='/'>
        <StaticImage
          src={'../../../images/calabash_logo_social.jpg'}
          style={logoWrapper}
          alt={'logo'}
        />
      </Link>
      <span style={appHeaderSpan}>
        <ForSaleBanner />
        <NavMenu />
      </span>
    </div>
  );
}

export default AppHeader;