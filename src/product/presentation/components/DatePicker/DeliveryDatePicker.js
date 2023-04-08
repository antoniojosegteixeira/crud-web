import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

function DeliveryDatePicker({ date, setDate, startingDate }) {
  const startingDateFilter = (newDate) => {
    return newDate >= startingDate;
  };

  return (
    <DatePicker
      selected={date}
      onChange={setDate}
      filterDate={startingDateFilter}
      dateFormat="dd/MM/yyyy"
      placeholderText="Selecione uma data"
      className="custom-datepicker"
      disabled={startingDate ? false : true}
    />
  );
}

export default DeliveryDatePicker;
