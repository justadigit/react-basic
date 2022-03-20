import React, { useReducer } from 'react';

function ReducerCounterThree() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      <div>
        <div>Count Two - {counterTwo}</div>
        <button onClick={() => dispatchTwo('increment')}>Increment</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
    </>
  );
}

export default ReducerCounterThree;
