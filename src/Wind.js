import React from "react";
import './App.css';

export default function Wind(props) {
  return (
    <div class="col-6">
      Wind: <span id="wind">{props.value}</span> km/h
    </div>
  );
}
