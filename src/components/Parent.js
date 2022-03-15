import React from 'react';
import Child from './Child';

const Parent = () => {
  function parentClick(name) {
    alert(`value from Child component is ${name}`);
  }
  return (
    <div>
      <Child clickHandler={parentClick} />
    </div>
  );
};

export default Parent;
