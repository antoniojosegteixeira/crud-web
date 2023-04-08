import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

function OrderDatePicker({ date, setDate }) {
  const pastDatesOnly = (newDate) => {
    const today = new Date();
    return newDate <= today;
  };

  return (
    <DatePicker
      selected={date}
      onChange={setDate}
      filterDate={pastDatesOnly}
      dateFormat="dd/MM/yyyy"
      placeholderText="Selecione uma data"
      className="custom-datepicker"
    />
  );
}

export default OrderDatePicker;
