import React from "react";
import './App.css';

export default function Humidity(props) {
  return (
    <div class="col-6 right">
      Humidity: {props.value}
      <span id="humidity"></span>%
    </div>
  );
}