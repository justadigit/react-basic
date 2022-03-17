import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(3);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
