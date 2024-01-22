import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1 className='text-center' style={{fontSize: "60px"}}>Counter App</h1>
       <h1 className ="text-center" style={{fontSize : "50px"}}> {count} </h1>
        <br/>
        <button className='Minus' onClick = {() => setCount(count+1)}>Increment</button>

        <button className='Plus' onClick = {() => setCount(count-1)}>Decrement</button>
    </div>
  )
}
