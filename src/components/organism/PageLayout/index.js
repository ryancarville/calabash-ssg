import * as React from "react";
import AppHeader from "../AppHeader"
import Seo from "../Seo"
import { createGlobalStyle } from 'styled-components';
import Footer from "../Footer"

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Helvetica, Arial, sans-serif, serif;
    box-sizing: border-box;
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