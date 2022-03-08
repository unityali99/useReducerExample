import { useReducer } from "react";
import initFunc from "./reducer/initFunc";
import reducer from "./reducer/reducer";

function App() {
  const initValue = 0;
  const [state, dispatch] = useReducer(reducer, initValue, initFunc);
  return (
    <div className="App">
      <div>{state.count}</div>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset", payload: initValue })}
      >
        {"Reset"}
      </button>
    </div>
  );
}

export default App;
