import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './redux/slice'


export default function UseStore() {
    const todos = useSelector(state => state.todos)
    console.log(todos);
    const dispatch = useDispatch()
  return (
    <div>
      <h1>useStore</h1>
      {
        todos.map((e) =>{
            return(<div>
                <p key={e.id}>
                {e.text}
                </p>
                <button onClick={()=>dispatch(remove(e.id))}>X</button>
            </div>)
            
            
        })
      }
    </div>
  )
}
