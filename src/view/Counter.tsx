import { useCounter } from "../context/counter";

export const Counter = () => {
  const { state } = useCounter();
  const { count } = state;
  return <div>Counter:{count}</div>;
};
