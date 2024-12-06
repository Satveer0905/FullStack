import React, { useState } from 'react';

function Colorchange() {
  const [textColor, setTextColor] = useState('black'); 

  return (
    <div>
      <h1 style={{ color: textColor }}>Click a button to change my color!</h1>
      
      <button onClick={() => setTextColor('red')}>Red</button>
      <button onClick={() => setTextColor('blue')}>Blue</button>
      <button onClick={() => setTextColor('green')}>Green</button>
      <button onClick={() => setTextColor('purple')}>Purple</button>
    </div>
  )
}
export default Colorchange;
