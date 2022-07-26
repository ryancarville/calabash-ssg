import * as styles from '../../../cssModules/reservationsBar.module.css';
import React, { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from '../../atoms/DatePicker';
import { PropertyType } from '../../../utils/common';
import emailjs from '@emailjs/browser';

export default function ReservationsBar() {
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
  const [showMessage, setShowMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(null);

  const isBrowser = typeof window !== 'undefined';

  const isSmallScreen = () => {
    if (isBrowser && window.innerWidth < 500) return true;
    return false;
  }

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
    setSendingMessage(true);
    emailjs
      .send(
        `${process.env.GATSBY_EMAIL_JS_GMAIL_SERVICE_ID}`,
        'template_n2i3dai',
        formState,
        `${process.env.GATSBY_EMAIL_JS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setShowMessage(false);
          setMessageSent(true);
          handleHelperMsgClose();
          setFormState(initialState);
        },
        (error) => {
          setMessageSent(error.text);
        }
      ).finally(() => {
        setSendingMessage(false);
      });
  };
  return (
    <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
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
        <option value={PropertyType.PENTHOUSE}>{PropertyType.PENTHOUSE}</option>
        <option value={PropertyType.GARDEN_FLAT}>
          {PropertyType.GARDEN_FLAT}
        </option>
      </select>
      <DatePicker
        eventType={formState.property}
        onChange={(e) => handleOnChange(e)}
      />
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
      <span className={styles.guestsWrapper}>
        <input
          className={styles.numInputWrapper}
          name={'numOfGuests'}
          value={formState.numOfGuests}
          type={'number'}
          min={1}
          max={8}
          onChange={(e) =>
            handleOnChange({ name: e.target.name, value: e.target.value })
          }
          required
        />
        <label htmlFor={'numOfGuest'}>Guests</label>
      </span>
      <span className={styles.checkboxInputWrapper}>
        <span className={styles.checkboxWrapper}>
          <input
            className={styles.checkboxInput}
            type={'checkbox'}
            id={'rentDefender'}
            onChange={(e) =>
              handleOnChange({ name: e.target.name, value: e.target.value })
            }
            value={formState.defender}
            name={'defender'}
          />
          <label htmlFor={'defender'} className={styles.checkboxLabel}>
            I want to rent the Land Rover
          </label>
        </span>
        <span className={styles.checkboxWrapper}>
          <input
            className={styles.checkboxInput}
            type={'checkbox'}
            id={'message'}
            onChange={(e) => setShowMessage(!showMessage)}
            value={showMessage}
            name={'message'}
          />
          <label htmlFor={'message'} className={styles.checkboxLabel}>
            Add a message?
          </label>
        </span>
      </span>
      {!!(isSmallScreen() && showMessage) && (
        <textarea
          className={styles.textArea}
          name={'message'}
          value={formState.message}
          placeholder={'Type message...'}
          onChange={(e) =>
            handleOnChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      <button
        className={styles.submitButton}
        type={'submit'}
        disabled={sendingMessage}
      >
        {sendingMessage ? (
          'Sending...'
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} />
        )}
      </button>
      {!!(!isSmallScreen() && showMessage) && (
        <textarea
          className={styles.textArea}
          name={'message'}
          value={formState.message}
          placeholder={'Type message...'}
          onChange={(e) =>
            handleOnChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
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
    </form>
  );
}
