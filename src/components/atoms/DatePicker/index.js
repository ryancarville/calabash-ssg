import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { useState } from 'react'
import { DateRangePicker } from "react-dates"
import useGoogleCalendar from '../../../hooks/useGoogleCalender'

export default function DatePicker({eventType, onChange}) {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(startDate);

  const allEvents = useGoogleCalendar();

  const handleBlockedDates = (e) => {
    const currDate = e._d;
    let isBlocked = false;
    allEvents.forEach(cal => {
      if (cal.childrenCalendarEvent[0].organizer.displayName === eventType) {
        cal.childrenCalendarEvent.find((event) => {
          const blockedStartDate = new Date(event.start.date);
          const blockedEndDate = new Date(event.end.date);
          isBlocked = currDate >= blockedStartDate && currDate <= blockedEndDate;
          return isBlocked;
        });
      } else { return false; }
    })
    return isBlocked;
  }

  const getNumOfMonths = () => {
    if (window.innerWidth < 500) return 1;
    return 2;
  }

  const handleDatesChange = ({startDate, endDate}) => {
    if (endDate) {
      onChange({
        name: 'dates',
        value: {
          start: new Date(startDate._d).toISOString().split('T')[0],
          end: new Date(endDate._d).toISOString().split('T')[0]
        }
      });
    }
  }
  return (
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId='calabash_startDate' // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId='calabash_endDate' // PropTypes.string.isRequired,
      isDayBlocked={(e) => handleBlockedDates(e)}
      showClearDates={true}
      required={true}
      onDatesChange={({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
        handleDatesChange({startDate, endDate})
      }} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      minimumNights={5}
      numberOfMonths={getNumOfMonths()}
    />
  );
}
