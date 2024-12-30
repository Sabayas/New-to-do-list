"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
  }


  return (
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
      
    </div>
  )
}

export default page
