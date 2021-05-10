import React from 'react';
import PropTypes from 'prop-types';

const HoursList = ({ hours }) => {
  const convertTo12Hours = (time) => {
    let hour = Number(time.slice(0, 2));
    const mins = time.slice(2);
    const AMPM = hour > 12 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:${mins}${AMPM}`;
  };
  const daysOfTheWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  ];
  return (hours.map((day) => (
    <div key={day.day}>
      {daysOfTheWeek[day.day]}
      {' '}
      {convertTo12Hours(day.start)}
      -
      {convertTo12Hours(day.end)}
    </div>
  )));
};

export default HoursList;

HoursList.propTypes = {
  hours: PropTypes.arrayOf(PropTypes.object),
};

HoursList.propTypes = {
  hours: PropTypes.arrayOf(PropTypes.object),
};
