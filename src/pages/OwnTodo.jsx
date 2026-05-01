import React, { useState } from 'react'

const OwnTodo = () => {

    const [input , setInput] = useState("")

    const [value , setValue] = useState([])

    const [editIndex , setEditIndex] = useState(null)


  return (
    <div>
        <div className='flex items-center justify-center h-screen bg-gray-200'>
            <div className='flex flex-col items-center gap-5 py-10 bg-white border rounded-lg shadow-lg px-11'>
                <h1 className='text-2xl font-bold'>Todo List</h1>
                
                <div className='flex items-center gap-4'>
                    <label htmlFor="task">Task:</label>
                    <input type="text" name="task" id="task" placeholder='Enter your task...' value={input}
                    className='w-64 py-2 pl-1 border rounded-lg'
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />
                </div>

                <div className='flex gap-5'>

                    <button className='px-5 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600'
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

                    <button className='px-5 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600'
                    onClick={() => {
                        setValue([])
                    }} >Delete All</button>
                </div>

                {value.map((item , index) => {
                    return <div key={index} className='flex items-center justify-between w-full p-3 border rounded-lg'>
                        <p>{item}</p>
                        <div className='flex gap-3'>
                            <button className='px-1 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600' onClick={() => {
                                setValue((prev) => {
                                    return prev.filter((_,i) => i !== index)
                                }) 
                            }}>Delete</button>
                            <button onClick={() => {
                                setInput(item)
                                setEditIndex(index)
                            }} className='px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600' >
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