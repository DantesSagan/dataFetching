import { useState } from 'react';

export default function UseCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}
