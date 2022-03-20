import React, { useState, useEffect } from 'react';

function MouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log('useEffect called end');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <div>
      <div>
        {' '}
        Hook X - {x} Y - {y}
      </div>
    </div>
  );
}

export default MouseMove;
