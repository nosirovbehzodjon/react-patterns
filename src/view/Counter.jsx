import { useCounter } from "../context/counter";

const Counter = () => {
  const { state } = useCounter();
  const { count } = state;
  return <div>Counter:{count}</div>;
};

export default Counter;
