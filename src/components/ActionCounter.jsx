import { useCounter } from "../context/counter";

const ActionCounter = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default ActionCounter;
