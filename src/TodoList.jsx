import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { MdRemoveCircle } from "react-icons/md";


const TodoList=()=>{

  const [num,setNum]=useState(0);
  const incNum =()=>{
    setNum(num+1)

  }
  const decNum =()=>{
    
    setNum(num-1)
    if(num===0)
    {
      setNum(0);
      alert("Number is invalid Negative number");
      
    } 

  }
  return (
     <>
       <div className='main_div'>
       <div className='center_div'>
          <h1> {num}</h1>
          <div className='btn_div'>
            <button onClick={incNum} clasName="btn_green"><MdAddCircle></MdAddCircle></button>
            <button onClick={decNum} className="br"> <MdRemoveCircle></MdRemoveCircle></button>
          </div>

       </div>

       </div>
     </>
  )
}

export default TodoList;





