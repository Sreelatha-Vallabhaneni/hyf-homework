import React, { useState, useEffect, createContext } from "react";
import uuid from "uuid/v4";
import ShiftForm from "./form";
import FilterShift from "./filterShift";
import ShiftList from "./shiftList";

export const stateContext = createContext();

function Shifts(props) {
  const [empShift, setEmpShift] = useState([{}]);
  const ROOT_URL =
    "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw";
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(ROOT_URL);
        const result = await response.json();
        setEmpShift(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const addShift = (name, startTime, endTime) => {
    return setEmpShift([
      ...empShift,
      {
        id: uuid(),
        name: name,
        start: startTime,
        end: endTime
      }
    ]);
  };
  const totalHours = (th2, th1) => {
    var diff = (new Date(th2).getTime() - new Date(th1).getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  };
  const totalPrice = (th2, th1) => {
    const wage = 100;
    return wage * totalHours(th2, th1);
  };

  return (
    <React.Fragment>
      <ShiftForm addShift={addShift} />
      <stateContext.Provider value={{ empShift, setEmpShift }}>
        <FilterShift />
      </stateContext.Provider>
      <ShiftList
        totalHours={totalHours}
        totalPrice={totalPrice}
        empShift={empShift}>
        {props.children}
      </ShiftList>
    </React.Fragment>
  );
}
export default Shifts;
