import React, { useReducer } from "react";
import "./App.css";

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      // Create a new state object by spreading the previous state
      // and incrementing the count property
      return { ...state, count: state.count + 1 };
    case "decrement":
      // Create a new state object by spreading the previous state
      // and decrementing the count property
      return { ...state, count: state.count - 1 };
    case "toggleText":
      return { ...state, toggleText: !state.toggleText };
    default:
      // If the action type is unknown, throw an error
      throw new Error("Unknown Action: " + action.type);
  }
};

function App() {
  // Initialize the state using the useReducer hook
  // The initial state is an object with a count property set to 0
  const [state, dispatch] = useReducer(reducer, { count: 0, toggleText: true });

  // Event handler for the increment button
  const increment = () => {
    // Dispatch the "increment" action to the reducer
    dispatch({ type: "increment" });
  };

  const toggleText = () => {
    // Dispatch the "toggleText" action to the reducer
    dispatch({ type: "toggleText" });
  };

  // Event handler for the decrement button
  const decrement = () => {
    // Dispatch the "decrement" action to the reducer
    dispatch({ type: "decrement" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Reducer/Counter App </h2>
      </header>
      {/* Display the current count value */}
      <h3 className="count">Count: {state.count}</h3>
      <div className="btn">
        {/* Increment button */}
        <button onClick={increment}>Increase [+]</button>
        {/* Decrement button */}
        <button onClick={decrement}>Decrease [-]</button>
      </div>
      <div className="btn">
        {/* Render the text conditionally based on the toggleText state */}
        {state.toggleText && <h3 className="count">HIDE ME!</h3>}
        <button onClick={toggleText}>Click to Hide/Show Text</button>
      </div>
    </div>
  );
}

export default App;
