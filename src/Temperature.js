import React from "react";
import './App.css';

export default function Temperature(props) {
  return (
    <span>
      <strong id="temperature">{props.value}</strong>
      <span class="units">
        °C
        <span>|</span> °F
      </span>
    </span>
  );
}