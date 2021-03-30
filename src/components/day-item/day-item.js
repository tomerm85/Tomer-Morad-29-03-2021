import React from 'react';

import './day-item.scss';

const DayItem = ({ day }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const {Date: date, Temperature = {}}= day;
  const dateString = new Date(date);
  const dayToShow = daysOfWeek[dateString.getDay()];
  const {Maximum = {}} = Temperature;
  const {Value} = Maximum;
  return (
    <div className="day-item">
      <div className="day-of-week">{dayToShow}</div>
      <div className="day-temperature">{Value}&#176;c</div>
    </div>
  );
};

export default DayItem;
