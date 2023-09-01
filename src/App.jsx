import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ChevronUp,ChevronsUp,ChevronDown,ChevronsDown,Hash,RotateCcw} from 'react-feather'
 

function App() {
  const [count, setCount] = useState(0)
  function handleClicks(value){
      // increment by 1
      if (value === "add")setCount((count)=>count + 1)
      // increment by 10
      else if(value==="+10") setCount((count)=>count + 10)
      // resetting the value
      else if(value==="reset") setCount(0)
      // getting random numbers
      else if(value === "random"){
        const random = Math.trunc(Math.random()*101)
        setCount(random)
      }
      // decrement by 1
      else if(value === "minus")setCount((count)=>count - 1)
      // decrement by 10
      else if(value==="-10") setCount((count)=>count - 10)

      
  }

  return (
    <>
      
      <div className='box'>
          <p>Current value:</p>
          <p className={count < 0 ? "result red":count > 0 ?"result green":"result"}>{count}</p>
          <div className="btn-box">

          <Button value={"add"} onClick={ handleClicks} >{<ChevronUp />}</Button>
          <Button value={"+10"} onClick={ handleClicks} >{<ChevronsUp />}</Button>
          <Button value={"reset"} onClick={ handleClicks} >{<RotateCcw/>}</Button>
          <Button value={"random"} onClick={ handleClicks} >{<Hash/>}</Button>
          <Button value={"minus"} onClick={ handleClicks} >{<ChevronsDown />}</Button>
          <Button value={"-10"} onClick={ handleClicks}>{<ChevronDown />}</Button>
           
          </div>
      </div>
    </>
  )
}


function Button({children,onClick,value,count}){
  return(
    <button value={value} className="btn" onClick={()=>{onClick(value)}}  >{children}
    
    
    </button>
  )
}

export default App
