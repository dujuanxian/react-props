import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Hello = props => {
  return <div className="greeting">Hello {props.name}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Hello name="world" />, rootElement);
