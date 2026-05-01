import React, { useState } from 'react'

const Input = () => {

  const [data,setData] = useState()

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id='name' name='name' className='border rounded pl-2 py-2'
        onChange={(e) => setData(e.target.value)} />
      </div>
      <button className='bg-green-500 px-5 py-2 text-white rounded-lg' >Submit</button>
      <div>
        <p>{data}</p>
      </div>
    </div>
  )
}

export default Input