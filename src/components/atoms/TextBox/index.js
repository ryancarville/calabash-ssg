import * as styles from '../../../cssModules/textBox.module.css'
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default function TextBox({title, content}) {
  return (
    <article className={styles.textBoxWrapper}>
      <h2>{title}</h2>
      <div className={styles.textBox}>{renderRichText(content)}</div>
    </article>
  );
}
