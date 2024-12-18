import React, { useState } from 'react'

function State3() {
    const [total, setTotal] = useState(0);
  return (
    <div>
    <button onClick ={() => { setTotal(total + 1)} }> Bharta Hua</button>
  
    <button onClick ={() => { setTotal(total - 1)}}> Ghatata Hua</button>
    <p> Total: {total}</p>
    </div>
  )
}

export default State3
