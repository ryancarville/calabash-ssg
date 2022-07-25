import * as styles from '../../../cssModules/accordionItem.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useEffect, useState } from 'react'
import { INLINES } from '@contentful/rich-text-types';
import Dialog from '../Dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
      tabIndex={-1}
    >
      {open && (
        <Dialog>
          <div className={currClass}>
            <span className={styles.closeButtonWrapper}>
              <FontAwesomeIcon
                icon={faXmark}
                size={'xl'}
                onClick={() => setOpen(!open)}
              />
            </span>
            <h3>{title}</h3>
            <span>{renderRichText(content, options)}</span>
          </div>
        </Dialog>
      )}
      <h3>{title}</h3>
    </div>
  );
}
