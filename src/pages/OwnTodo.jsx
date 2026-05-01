import React, { useState } from 'react'

const OwnTodo = () => {

    const [input , setInput] = useState("")

    const [value , setValue] = useState([])

    const [editIndex , setEditIndex] = useState(null)


  return (
    <div>
        <div className='flex items-center justify-center h-screen bg-gray-200'>
            <div className='flex flex-col items-center gap-5 border py-10 px-11 bg-white rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold'>Todo List</h1>
                
                <div className='flex gap-4 items-center'>
                    <label htmlFor="task">Task:</label>
                    <input type="text" name="task" id="task" placeholder='Enter your task...' value={input}
                    className='border pl-1 py-2 rounded-lg w-64'
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />
                </div>

                <div className='flex gap-5'>

                    <button className='bg-green-500 px-5 py-2 text-white rounded-lg'
                    onClick={() => {
                        if(input.trim() === "") return

                        if(editIndex !== null){
                            setValue((prev) => {
                                return prev.map((item , index) => {
                                    return index === editIndex ? input : item
                                })
                            })
                            setEditIndex(null)
                        }else{
                            setValue((prev) => {
                                return [...prev , input]
                            })
                        }

                        setInput("")

                    }}>Add Task</button>

                    <button className='text-white bg-red-500 px-5 py-2 rounded-lg'
                    onClick={() => {
                        setValue([])
                    }} >Delete All</button>
                </div>

                {value.map((item , index) => {
                    return <div key={index} className='flex items-center justify-between w-full border p-3 rounded-lg'>
                        <p>{item}</p>
                        <div className='flex gap-3'>
                            <button className='text-white bg-red-500 px-1 py-1 rounded-lg' onClick={() => {
                                setValue((prev) => {
                                    return prev.filter((_,i) => i !== index)
                                }) 
                            }}>Delete</button>
                            <button onClick={() => {
                                setInput(item)
                                setEditIndex(index)
                            }} className='text-white bg-blue-500 px-3 py-1 rounded-lg' >
                                Edit
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default OwnTodo