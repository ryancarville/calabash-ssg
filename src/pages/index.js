import * as styles from '../cssModules/home.module.css'
import * as imgStyles from '../cssModules/image.module.css';
import * as React from "react"
import WelcomeMessage from "../components/atoms/WelcomeMessage"
import Banner from "../components/molecules/Banner"
import PageLayout from "../components/organism/PageLayout"
import Reviews from '../components/molecules/Reviews/index.js'
import ReservationsBar from "../components/molecules/ReservationsBar"
import ContentBox from "../components/atoms/ContentBox"
import useHomePage from "../hooks/useHomePage"

const IndexPage = () => {
  const {banner, welcomeMessage, contentBoxes} = useHomePage();

  return (
    <PageLayout
      pageData={{
        title: 'Calabash Villa Bequia',
        description: 'Luxury private villa on Bequia, SVG'
      }}
    >
      <Banner text={banner.bannerText} images={banner.images} />
      <ReservationsBar />
      <div className={styles.messageWrapper}>
        <WelcomeMessage content={welcomeMessage.message} />
      </div>
      <Reviews />
      {contentBoxes.map((box, i) => {
        const isOdd = i % 2 === 0;
        return (
          <ContentBox
            key={`${box.title}-${i}`}
            title={box.title}
            content={box.content}
            image={box.image.gatsbyImageData}
            linkPath={box.linkPath}
            linkText={"Learn More"}
            direction={isOdd ? 'left' : 'right'}
            imgClass={imgStyles.defaultImage}
          />
        );
      })}
    </PageLayout>
  );
}

export default IndexPage
