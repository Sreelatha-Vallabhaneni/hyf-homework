import React, { useState, useContext } from "react";
import { stateContext } from "./shifts";

function FilterShift() {
  const [search, setSearch] = useState("");
  const { empShift, setEmpShift } = useContext(stateContext);
  const shiftFilter = e => {
    e.preventDefault();
    setEmpShift(
      empShift.filter(item =>
        item.name
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      )
    );
  };
  return (
    <form className="filter">
      <h3>Filter Shifts</h3>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={shiftFilter}>Search</button>
    </form>
  );
}
export default FilterShift;
