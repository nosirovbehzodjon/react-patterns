import { createContext, useContext, useReducer } from "react";
import { initialCounterState } from "./config";

const CounterContext = createContext();

export const CounterProvider = (props) => {
  const { children, ...rest } = props;
  const [state = initialCounterState, dispatch] = useReducer(
    (state = initialCounterState, action) => {
      const step = action.step ?? 1;
      switch (action.type) {
        case "increment":
          return { ...state, count: state.count + step };
        case "decrement":
          return { ...state, count: state.count - step };
        default:
          throw new Error("there is not any suitable case!");
      }
    }
  );

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const value = { state, increment, decrement };
  return (
    <CounterContext.Provider value={value} {...rest}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter should be inside of Counter Provider!");
  }

  return context;
};
