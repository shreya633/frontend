'use client'
import React, { useState } from 'react'




const about = () => {
  const [num, setNum] = useState(10)
  const handle = () => {  setNum(num + 5)
  }
  return (
    <div>
      <p>shad chutiya hai</p>
      <p>{num}</p>
      <button onClick={handle}>change numbers</button>
    </div>
    
  )
}

export default about
