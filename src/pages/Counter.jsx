import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center gap-5 h-screen'>
                <h1 className='font-bold text-3xl'>Counter</h1>
                <div>
                    <p className='text-3xl'>{count}</p>
                </div>
                <div className='flex gap-x-4'>
                    <button onClick={() => setCount(prev => prev - 1)} className='bg-red-500 rounded-lg px-5 py-3 text-white'>-</button>
                    <button onClick={() => setCount(prev => prev + 1)} className='bg-green-500 rounded-lg px-5 py-3 text-white'>+</button>
                    <button onClick={() => setCount(0)} className='bg-blue-500 rounded-lg px-5 py-3 text-white'>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter