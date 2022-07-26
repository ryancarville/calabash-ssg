import * as styles from '../cssModules/rates.module.css'
import React from 'react'
import PageLayout from '../components/organism/PageLayout'
import { months } from '../utils/common'
import useSeasonsAndRates from '../hooks/useSeasonsAndRates'
import ContactForm from '../components/molecules/ContactForm'

export default function Reservations() {
  const { title, subtitle, seasons, rateData } = useSeasonsAndRates()

  //parse the season and dates
  const getSeasonElements = (season) => {
    const startDate = new Date(season.start);
    const endDate = new Date(season.end);
    return (
      <div>
        <h3>{season.title}</h3>
        <p>
          {months[startDate.getMonth()]} {startDate.getDate()} -{' '}
          {months[endDate.getMonth()]} {endDate.getDate()}
        </p>
      </div>
    );
  }

  // parse the keys for the rate object
  // return the correct element for the key
  const getRateElements = (rates) => {
      const [symbol, currency] = rates.currency.split(' ');
      return (
        <div>
          <h3>{rates.title}</h3>
          <p>Low Season - {symbol}{rates.low}{currency}</p>
          <p>Mid Season - {symbol}{rates.mid}{currency}</p>
          <p>High Season - {symbol}{rates.high}{currency}</p>
          <p>Christmas Season - {symbol}{rates.christmas}{currency}</p>
          <p>Easter Season - {symbol}{rates.easter}{currency}</p>
        </div>
      );
  }

  return (
    <PageLayout
      pageData={{
        title: 'Rates + Reservations',
        description: 'Find all current availability and rates for the villa.',
        link: 'https://www.calabashvillabequia.com/reservations/'
      }}
    >
      <div className={styles.ratesDataWrapper}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.seasonRatesWrapper}>
          <div className={styles.seasonsWrapper}>
            {seasons.map((season) => getSeasonElements(season))}
          </div>
          {rateData.map((rates) => (
            <div className={styles.ratesWrapper}>{getRateElements(rates)}</div>
          ))}
        </div>
      </div>
      <ContactForm showDatePicker={true} title={'Reservation Enquiry'} />
    </PageLayout>
  );
}
