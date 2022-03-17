import { useState } from 'react';

function PrevCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      Count : {count} <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment 5</button>
    </div>
  );
}

export default PrevCounter;
