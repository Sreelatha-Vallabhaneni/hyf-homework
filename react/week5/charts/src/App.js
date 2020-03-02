import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
   scaleLinear
} from "d3";

var d3 = require("d3");
function App() {
  const [data, setData] = useState([5, 25, 20, 30, 25 ]);
  
  const svgRef = useRef();  
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current)
    .attr("height", 400)
    .attr("width", 600)
    .style("margin", 50);

    const xScale = scaleLinear()
      .domain([0, data.length-1])
      .range([50, 450]);

    const yScale = scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([500, 60]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(index=> index +1);
      
    svg
      .select(".x-axis")
      //.style("transform", "translateY(150px)")
      .call(xAxis)
      .attr("stroke-width", 0).style("font-size", 15); //to remove y-axes line

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      //.style("transform", "translateX(300px)")
      .call(yAxis)
      .attr("stroke-width", 0).style("font-size", 12); //to remove y-axes line
   
    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // renders path element, and attaches
    // the "d" attribute from line generator above
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>      
    </React.Fragment>
  );
}

export default App;
