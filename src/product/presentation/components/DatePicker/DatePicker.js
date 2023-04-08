import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

function DatePickerComponent({ date, setDate }) {
  const isFutureDate = (newDate) => {
    const today = new Date();
    return newDate < today;
  };

  return (
    <DatePicker
      selected={date}
      onChange={setDate}
      filterDate={isFutureDate}
      dateFormat="dd/MM/yyyy"
      placeholderText="Selecione uma data"
      className="custom-datepicker"
    />
  );
}

export default DatePickerComponent;
