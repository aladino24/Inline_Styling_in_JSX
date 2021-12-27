import React from "react";
import ReactDOM from "react-dom";

const style = {
  color: "blue",
  backgroundColor: "green",
  border: "1px solid yellow"
};

style.color = "red";

ReactDOM.render(
  <h1 style={style}>Hello World!</h1>,
  document.getElementById("root")
);
