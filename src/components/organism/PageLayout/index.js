import * as React from "react";
import AppHeader from "../AppHeader"
import Seo from "../Seo"
import { createGlobalStyle } from 'styled-components';
import Footer from "../Footer"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Helvetica, Arial, sans-serif, serif;
    box-sizing: border-box;
    font-weight: 100;
  }
  body {
    padding: 0;
    margin: 0;
    color: "blue";
    overflow-x: hidden;
    width: 100vw;
  }
`;
const PageLayout = (props) => {
  const {pageData, children} = props;

  const isBrowser = typeof window !== 'undefined';

  React.useEffect(() => {
    if (isBrowser) window.scrollTo(0, 0);
  }, [isBrowser]);
  return (
    <>
      <GlobalStyles />
      <Seo pageData={pageData} />
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;