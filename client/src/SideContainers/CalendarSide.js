import React from "react";
// import Calendar from "react-calendar/dist/entry.nostyle";
// import Calendar from 'react-calendar';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const CalendarSide = () => (

    <div className="card calendarSide">
        <div className="card-header">
            Calendar
        </div>
        <div className="card-body">
            <DayPicker />
            {/* <Calendar /> */}
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        </div>
    </div>

);

export default CalendarSide;