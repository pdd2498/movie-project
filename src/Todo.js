import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './redux/slice';

export default function Todo() {
    const [input , setInput] = useState('');
    const dispatch = useDispatch()

    const addButon = ()=>{
        dispatch(add(input))
        setInput('');
    }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addButon}>add</button>
    </div>
  )
}
