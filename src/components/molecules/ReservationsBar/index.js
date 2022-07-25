import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import DatePicker from '../../atoms/DatePicker'
import * as styles from '../../../styles/reservationsBar.module.css'
import { PropertyType } from '../../../utils/common'
import emailjs from '@emailjs/browser';
import Dialog from '../../atoms/Dialog'
import AccordionItem from '../../atoms/AccordionItem'

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

  const [showMessage, setShowMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false)
  const [messageError, setMessageError] = useState(null);

  const handleOnChange = ({name, value}) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleHelperMsgClose = () => {
    setTimeout(() => {
      setMessageError('');
      setMessageSent(false);
    }, 5000)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.EMAIL_JS_GMAIL_SERVICE_ID,
        'template_n2i3dai',
        formState,
        process.env.EMAIL_JS_PUBLIC_KEY
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
      );
  }
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
            id={'message'}
            onChange={(e) => setShowMessage(!showMessage)}
            value={showMessage}
            name={'message'}
          />
          <label htmlFor={'message'} className={styles.checkboxLabel}>
            I want to add a message
          </label>
        </span>
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
      </span>
      <button className={styles.submitButton} type={'submit'}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      {showMessage && (
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
          <p>{messageError}  Please email us directly at <a href="mailto=calabashvillabequia@gmail.com" target={'_blank'} rel='noopener' >calabashvillabequia@gmail.com</a>.</p>
        </span>
      )}
    </form>
  );
}
