import * as styles from '../../../styles/accordionItem.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useEffect, useState } from 'react'
import { INLINES } from '@contentful/rich-text-types';
import Dialog from '../Dialog'

export default function AccordionItem({title, content}) {
  const [open, setOpen] = useState(false);
  const [currClass, setCurrClass] = useState(styles.itemClosed);

  useEffect(() => {
    if (open) setCurrClass(styles.itemOpen);
    else { setCurrClass(styles.itemClosed)}
  }, [open]);

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            className={styles.text}
            href={node.data.uri}
            target={'_blank'}
            rel='noreferrer'
          >
            {children}
          </a>
        );
      }
    }
  };
  return (
    <div
      className={styles.accordionItemWrapper}
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
      role={'button'}
    >
      {open && (
        <Dialog>
          <div className={currClass}>
            <h3>{title}</h3>
            <span>{renderRichText(content, options)}</span>
          </div>
        </Dialog>
      )}
      <h3>{title}</h3>
    </div>
  );
}
