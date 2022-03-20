import React, { useState, useEffect } from 'react';

const EffectToggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
    console.log('Toggled!');
  };
  useEffect(() => {
    console.log('I run only once if toggle is false.');
  }, []);

  return (
    <div>
      <button type="button" onClick={toggleHandler}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default EffectToggle;
