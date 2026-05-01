import React, { useState } from 'react'

const Todo = () => {

  const [input , setInput] = useState("")
  const [task , setTask] = useState([])

  const addTask = () => {
    if(input.trim() === "") return
    setTask([...task , input])
    setInput("")
  }

  const deleteTask = (indexToDelete) => {
    const updatedTasks = task.filter((_,index) => index !== indexToDelete)
    setTask(updatedTasks)
  }

  return (
    <div className='bg-gray-200'>
      <div className='flex flex-col gap-5 items-center justify-center h-screen'>
        <div className='flex flex-col gap-5 items-center bg-white p-8 rounded-lg shadow-lg'>
          
          <h1 className='font-bold text-2xl'>
            Todo
          </h1>

          <div className='flex gap-2 items-center'>
            <label htmlFor="task">Task:</label>
            <input type="text" id='task' value={input} placeholder='Enter your task...'
            className='border outline-blue-500 pl-1 py-2 rounded-lg'
            onChange={(e) => {
              setInput(e.target.value)
            }} />
          </div>

          <button className='text-white bg-green-500 rounded-lg px-5 py-2 hover:bg-green-600' 
          onClick={() => {
            addTask()
          }} >
            Add Task
          </button>

          <ul>
            {task.map((tasks , index) => {
              return <li key={index} className='flex mb-3 gap-5 gap-x-20 border px-2 py-2 rounded-lg shadow-md items-center'>
                {tasks}
                <button onClick={() => {
                  deleteTask(index)
                }} className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600'>Delete</button>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Todo