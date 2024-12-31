"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    setTask ([...task, {title ,desc}])
    setTitle("")
    setdesc("")
    
  }

  const deleteHandler = (i) =>{
    let copytask = [...task]
    copytask.splice(i,1)
    setTask(copytask)
  }

  let renderTask = <h2>No task available</h2>
    

  if (task.length > 0) {
    renderTask = task.map((t, i)=>{
      return (
        <li key={i} className='flex justify-between'>
        <div className='flex justify-between'>
          <h5 className='text-2xl justify-between'>{t.title}</h5>
          <h6 className='text-2xl justify-between'>{t.desc}</h6>
         
        </div>
        <button onClick={() => {
          deleteHandler(i)}} className='px-2 py-2 m-3 rounded-md bg-red-500 text-white justify-end'>Delete</button>
        </li>
      )
    })
  }else{
    
  }

 
  return (
    <>
    <div className='text-center'>
      <h1 className='bg-black text-white px-3 py-3 text-center text-2xl'>My to-do list</h1>
     <form onSubmit={submitHandler}>
      <input type='text' className='border bg-grey m-2 py-4 rounded-md' placeholder='Enter your task ' value={title} onChange={(e) =>{
        setTitle(e.target.value)
      }}></input>
      <input type='text' className='border bg-grey m-2 py-4 rounded-md' placeholder='Enter your description' value={desc} onChange={(e) =>{
        setdesc(e.target.value)
      }}></input>
     <button className='px-2 py-2 rounded-md bg-black text-white'> Add Task</button>
      
     </form>
    <hr />
     <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}

      </ul>
     </div>
     
     
    
      
    </div>
    </>
  )
}

export default page
