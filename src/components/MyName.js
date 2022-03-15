import React from 'react';

function MyName(props) {
  const { name, age, children } = props;
  return (
    <div>
      <h1>
        My Name is {name} and {age} old.
      </h1>
      {children}
    </div>
  );
}

export default MyName;
