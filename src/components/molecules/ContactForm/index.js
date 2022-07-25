import * as imgStyles from '../../../cssModules/image.module.css';
import * as styles from '../../../cssModules/contactForm.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import DatePicker from '../../atoms/DatePicker';
import { PropertyType } from '../../../utils/common';
import emailjs from '@emailjs/browser';
import useContact from '../../../hooks/useContact';
import Image from '../../atoms/Image';

export default function ContactForm({ showDatePicker, title }) {
  const { image } = useContact();
  const initialState = {
    fullName: '',
    email: '',
    numOfGuests: 1,
    property: PropertyType.ENTIRE_VILLA,
    defender: false,
    dates: null,
    message: ''
  };
  const [formState, setFormState] = useState(initialState);

  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(null);

  const handleOnChange = ({ name, value }) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleHelperMsgClose = () => {
    setTimeout(() => {
      setMessageError('');
      setMessageSent(false);
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSendingMessage(true)
    emailjs
      .send(
        `${process.env.EMAIL_JS_GMAIL_SERVICE_ID}`,
        'template_n2i3dai',
        formState,
        `${process.env.EMAIL_JS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setMessageSent(true);
          handleHelperMsgClose();
          setFormState(initialState);
        },
        (error) => {
          setMessageSent(error.text);
        }
      ).finally(() => {
        setSendingMessage(false)
      });
  };
  return (
    <div className={styles.formWrapper}>
      <div className={styles.sections}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {showDatePicker && (
            <div className={styles.flexRow}>
              <select
                id={'property'}
                name={'property'}
                value={formState.property}
                className={styles.propertySelect}
                onChange={(e) =>
                  handleOnChange({ name: e.target.name, value: e.target.value })
                }
              >
                <option value={PropertyType.ENTIRE_VILLA}>
                  {PropertyType.ENTIRE_VILLA}
                </option>
                <option value={PropertyType.PENTHOUSE}>
                  {PropertyType.PENTHOUSE}
                </option>
                <option value={PropertyType.GARDEN_FLAT}>
                  {PropertyType.GARDEN_FLAT}
                </option>
              </select>

              <DatePicker
                eventType={formState.property}
                onChange={(e) => handleOnChange(e)}
              />
              <span className={styles.guestsWrapper}>
                <input
                  className={styles.numInputWrapper}
                  name={'numOfGuests'}
                  value={formState.numOfGuests}
                  type={'number'}
                  min={1}
                  max={8}
                  onChange={(e) =>
                    handleOnChange({
                      name: e.target.name,
                      value: e.target.value
                    })
                  }
                  required
                />
                <label htmlFor={'numOfGuest'}>Guests</label>
              </span>
            </div>
          )}
          <div>
            <input
              className={styles.formInputWrapper}
              name={'fullName'}
              value={formState.fullName}
              placeholder={'Full Name'}
              onChange={(e) =>
                handleOnChange({ name: e.target.name, value: e.target.value })
              }
              required
            />
            <input
              className={styles.formInputWrapper}
              name={'email'}
              value={formState.email}
              placeholder={'Email'}
              type={'email'}
              onChange={(e) =>
                handleOnChange({ name: e.target.name, value: e.target.value })
              }
              required
            />
          </div>
          {showDatePicker && (
            <span className={styles.flexRow}>
              <span className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type={'checkbox'}
                  id={'rentDefender'}
                  onChange={(e) =>
                    handleOnChange({
                      name: e.target.name,
                      value: e.target.value
                    })
                  }
                  value={formState.defender}
                  name={'defender'}
                />
                <label htmlFor={'defender'} className={styles.checkboxLabel}>
                  I want to rent the Land Rover
                </label>
              </span>
            </span>
          )}
          <textarea
            className={styles.textArea}
            name={'message'}
            value={formState.message}
            placeholder={'Type message...'}
            onChange={(e) =>
              handleOnChange({ name: e.target.name, value: e.target.value })
            }
          />
          <button className={styles.submitButton} type={'submit'} disabled={sendingMessage}>
            {sendingMessage ? 'Sending...' : <FontAwesomeIcon icon={faPaperPlane} />}
          </button>
        </form>
      </div>

      <div className={styles.imgSection}>
        <h2>{title}</h2>
        <Image
          imageData={image.gatsbyImageData}
          className={imgStyles.lgImage}
        />
      </div>
      {messageSent && (
        <span>
          <p>Enquiry Sent! We will reply soon.</p>
        </span>
      )}
      {messageError && (
        <span>
          <p>
            {messageError} Please email us directly at{' '}
            <a
              href='mailto=calabashvillabequia@gmail.com'
              target={'_blank'}
              rel='noopener'
            >
              calabashvillabequia@gmail.com
            </a>
            .
          </p>
        </span>
      )}
    </div>
  );
}
