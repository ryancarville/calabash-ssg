import * as styles from '../../../cssModules/welcomeMessage.module.css'
import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from '@contentful/rich-text-types';

const WelcomeMessage = ({content}) => {

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className={styles.headingStyle}>{children}</h2>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className={styles.textStyle}>{children}</p>;
      }
    }
  };

  return (
    <section className={styles.boxWrapper}>
      <div>{renderRichText(content, options)}</div>
    </section>
  )
}

export default WelcomeMessage;