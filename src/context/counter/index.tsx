import { ReactNode, createContext, useContext, useReducer } from "react";

interface IState {
  count: number;
}

const initaialState: IState = {
  count: 0,
};

interface IAction {
  type: "increment" | "decrement";
}

interface ICounterContext {
  state: IState;
  increment: VoidFunction;
  decrement: VoidFunction;
}

export const CounterContext = createContext<ICounterContext | null>(null);

interface ICounterConfig {
  children: ReactNode;
}

const counterReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};

export const CounterProvider = (config: ICounterConfig) => {
  const { children } = config;

  const [state, dispatch] = useReducer(counterReducer, initaialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  const value = { state, increment, decrement };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("you should use useCounter inside CounterProvider!");
  }
  return context;
};
