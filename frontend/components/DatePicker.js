import React from 'react';

function DatePicker(props) {

  return (
    <div>
        <label htmlFor='dateInput'>Pick a date:</label>
        <input
            type="date"
            id="dateInput"
            value={props.date}
            onChange={props.handleChange}
        />
        <p>Selected Date: {props.date}</p>
    </div>
  )
}

export default DatePicker