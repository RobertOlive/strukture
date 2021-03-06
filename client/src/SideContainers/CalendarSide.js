import React, {Component} from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class CalendarSide extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: null,
        };
    }

    handleDayClick(day, { selected }) {
        this.props.date({selectedDay: day.toDateString()});
        this.setState({
          selectedDay: selected ? undefined : day,
        });
    }

    render() {
        return (
            <div className="card calendarSide">
                <div className="card-header">
                    <a className="calSide" href="/calendar">
                        Calendar
                    </a>
                </div>
                <div className="card-body">
                    <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick}/>
                </div>
            </div>
        )
    }
};

export default CalendarSide;