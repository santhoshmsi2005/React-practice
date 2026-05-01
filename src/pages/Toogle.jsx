import React, { useState } from 'react'

const Toogle = () => {

    const [toggle , setToggle] = useState(true)

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <div>
            Toggle
        </div>
        <div>
            <p>{toggle ? "ON" : "OFF"}</p>
        </div>
        <div>
            <button className={`px-5 py-3 rounded-lg ${toggle ? `bg-red-500` : `bg-green-500`}`} onClick={() => {
                setToggle(!toggle)
            }}>{toggle ? "OFF" : "ON"}</button>
        </div>
    </div>
  )
}

export default Toogle