import React from 'react';

const Child = (props) => {
  const name = 'Mg Mg';
  return (
    <div>
      <button onClick={() => props.clickHandler(name)}>Child button</button>
    </div>
  );
};

export default Child;
