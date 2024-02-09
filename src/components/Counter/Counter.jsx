import { useCounterProps } from "./useCounterProps";

export const Counter = () => {

  const {
    count,
    handleIncrement,
    handleDecrement
  } = useCounterProps();

  return <div>
    <h1>Counter</h1>
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
  </div>;
};
