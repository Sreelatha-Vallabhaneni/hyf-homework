import React, { useState } from 'react';
//import React from "react";
import DatePicker from "react-datepicker";
const AddDate = () => {
    const [item, setItem] = useState([{startDate: new Date()}]);

    const handleChange = date => {
      setItem({
        startDate: date
      });
    }
    

    return (
      <DatePicker className="date"
        selected={item.startDate}
        dateFormat="EEE, dd MMMM yyyy"
        onChange={handleChange}
      />
    );
}
export default AddDate;