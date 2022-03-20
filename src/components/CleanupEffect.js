import React, { useState, useEffect } from 'react';
import MouseMove from './MouseMove';

function CleanupEffect() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle display</button>
      {display && <MouseMove />}
    </div>
  );
}

export default CleanupEffect;
