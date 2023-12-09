
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'; 

const MyCalendar = ({ events }) => {
  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <div className="center-calendar">
        <Calendar
          tileContent={({ date, view }) => {
            const eventDates = events.map((event) => new Date(event.date).toDateString());
            return eventDates.includes(date.toDateString()) ? <div className="event-marker" /> : null;
          }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
