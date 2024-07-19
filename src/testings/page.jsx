'use client'
import React, { useState } from 'react'




const about = () => {
  const [num, setNum] = useState(khan)
  const handle = () => {  setNum(num + khan)
  }
  return (
    <div>
      <p>Ayan</p>
      <p>{num}</p>
      <button onClick={handle}>surname</button>
    </div>
    
  )
}

export default about
