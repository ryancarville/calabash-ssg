import * as styles from '../../../styles/contentBox.module.css';
import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Image from '../Image';
import Link from '../Link'
import clsx from 'clsx'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContentBox({
  image,
  title,
  content,
  imgClass = null,
  linkPath,
  linkText,
  externalLinkHref,
  externalLinkText,
  direction = 'left',
  backgroundColor = "White",
  color = "Turquoise",
  subContent = null
}) {

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        console.log(node)
        return node.content.map((el) => (
          <span style={{display: 'flex'}}>
            <FontAwesomeIcon
              icon={faCheck}
              className={styles.listCheck}
              size={'lg'}
              color={color}
            />
            <li className={styles.li}>{el.content[0].content[0].value}</li>
          </span>
        ));
      }
    }
  };
  const getBoxDirection = () => {
    if (direction === 'right') {
      return styles.flexRight
    };
  }
  return (
    <article
      className={clsx([styles.boxWrapper, getBoxDirection()])}
      style={{ backgroundColor: backgroundColor.toLowerCase() }}
    >
      {image && <Image imageData={image} className={imgClass} />}
      <div
        className={clsx([
          styles[`bg${backgroundColor}`],
          styles[`text${color}`],
          styles.textWrapper
        ])}
      >
        {title && <h2>{title}</h2>}
        {renderRichText(content, options)}
        {!!subContent && subContent}

        {linkPath && (
          <Link
            path={linkPath}
            text={linkText}
            className={clsx([
              styles.linkWrapper,
              styles[`linkBorder${color}`]
            ])}
          />
        )}
        {externalLinkHref && (
          <a
            href={externalLinkHref}
            target={'_blank'}
            rel='noreferrer'
            className={clsx([
              styles.linkWrapper,
              styles[`linkBorder${color}`]
            ])}
          >
            {externalLinkText}
          </a>
        )}
      </div>
    </article>
  );
}
