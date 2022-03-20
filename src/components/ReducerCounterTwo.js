import React, { useReducer } from 'react';

function ReducerCounterTwo() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, firstCounter: state.firstCounter + action.value };
      case 'decrement':
        return { ...state, firstCounter: state.firstCounter - action.value };
      case 'increment5':
        return { ...state, firstCounter: state.firstCounter + action.value };
      case 'sec_increment':
        return { ...state, secondCounter: state.secondCounter + action.value };
      case 'sec_decrement':
        return { ...state, secondCounter: state.secondCounter - action.value };
      case 'sec_increment5':
        return { ...state, secondCounter: state.secondCounter + action.value };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>
        Increment 5
      </button>
      <div>Sec Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'sec_increment', value: 1 })}>
        Sec Increment
      </button>
      <button onClick={() => dispatch({ type: 'sec_decrement', value: 1 })}>
        Sec Decrement
      </button>
      <button onClick={() => dispatch({ type: 'sec_increment5', value: 5 })}>
        Sec Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReducerCounterTwo;
