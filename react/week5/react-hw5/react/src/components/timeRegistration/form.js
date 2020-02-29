import React, { useState } from "react";

function ShiftForm({ addShift }) {
  const [employeeName, setEmployeeName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    !employeeName || !startTime || !endTime
      ? alert("please enter details")
      : alert("Shift saved");
    addShift(employeeName, startTime, endTime);
    setEmployeeName("");
    setStartTime("");
    setEndTime("");
  };
  
  return (
    <React.Fragment>
      <div>
        <u><h1>Time Registration Form</h1></u>
        <form className="shift-form" onSubmit={handleSubmit}>
          <label> Name
            <input
              type="text"
              value={employeeName}
              placeholder="Enter employee name"
              onChange={e => setEmployeeName(e.target.value)}/>
          </label>
          <label> Start time
            <input
              type="datetime-local"
              label="Start time"
              value={startTime}
              placeholder="Enter date time"
              onChange={e => setStartTime(e.target.value)}/>
          </label>
          <label> End time
            <input
              type="datetime-local"
              label="End time"
              value={endTime}
              placeholder="Enter date time"
              onChange={e => setEndTime(e.target.value)}/>
          </label>
          <button type="submit">Save shift</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ShiftForm;
