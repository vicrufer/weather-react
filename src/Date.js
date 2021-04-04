import React from "react";
import './App.css';

export default function Date(props) {
  return (
    <li>
      <span id="current-date">{props.day}</span>
      <span id="current-time"> {props.time}</span>
    </li>
  );
}
