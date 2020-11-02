import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react'

const StartDate =({handleDatePick,name}) => {
    console.log("name", name)
    const startDate = new Date();

    const ExampleCustomInput = ({ value, onClick }) => (
        <div style={{
            display: 'flex',
            position: "relative",
            margin: "16px",
            width: "auto",
            
          }}>
      <button style={{backgroundColor: '#01587D',  color: 'white', fontSize: '15px', border: 'none', marginRight: '5px'}} onClick={onClick}>
        {name}
      </button>
      </div>
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={date => handleDatePick(date)}
        customInput={<ExampleCustomInput value={name} 
        />}
      />
    );
  };

  export default StartDate;