import React from "react";

export default function ShiftList({ empShift, totalHours, totalPrice }) {
  return (
    <React.Fragment>
      {empShift.map(list => {
        return (
          <div className="shift-list" key={list.id}>
            <h2>{list.name}</h2>
            <p>Start time: {list.start}</p>
            <p>End time: {list.end}</p>
            <p>Total hours: {totalHours(list.end, list.start)} </p>
            <p>Total Price: {totalPrice(list.end, list.start)} DKK.</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}
