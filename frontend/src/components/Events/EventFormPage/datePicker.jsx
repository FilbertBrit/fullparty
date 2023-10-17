import 'react-dates/initialize';

import React, { useState } from "react";
export const DatePicker = ({ minDate, maxDate }) => {
const [startDate, setStartDate] = useState(null);  
const [endDate, setEndDate] = useState(null);  
const [focusedInput, setFocusedInput] = useState(null);
const handleDatesChange = ({ startDate, endDate }) => {
  setStartDate(startDate);
   setEndDate(endDate);  
};
const isOutsideRange = day =>
    day.isAfter(maxDate) || day.isBefore(minDate);
return (
   <DateRangePicker        
     startDate={startDate}        
     startDateId="date_picker_start_date_id"
     endDate={endDate}        
     endDateId="date_picker_end_date_id"        
     onDatesChange={handleDatesChange}       
     focusedInput={focusedInput}        
     onFocusChange={focusedInput => setFocusedInput(focusedInput)}
     isOutsideRange={isOutsideRange}  />
)};