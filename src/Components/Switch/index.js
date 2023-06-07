import React from "react";
import "./index.css";

export default function Switch(props) {
  return (
    <label class="switch">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span class="slider"></span>
    </label>
  );
}
