// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const button = {
    style: {
      backgroundColor: "blue",
      color: "white"
    },
    text: "Click me!"
  };
  const label = "Enter name:";

  return (
    <div>
      <label htmlFor="name" className="label">
        {label}
      </label>
      <input id="name" type="text" />
      <button style={button.style}>{button.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
