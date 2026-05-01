import React, { useState } from 'react'

const StatePratice = () => {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    const [userData, setUserData] = useState({
        name : "",
        comment : "",
    })

    const [data , setData] = useState([])

    console.log(name, comment);


    return (
        <div>
            <div className='flex flex-col lg:w-[60%] w-[90%] mx-auto pt-10 gap-5'>
                <h1 className='font-bold text-2xl text-center'>Comment</h1>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' className='pl-1 py-2 border rounded-lg outline-blue-500'
                        onChange={(e) => {
                            // setName(e.target.value)
                            setUserData((prev) => {
                                return {...prev , name: e.target.value}
                            })
                        }} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="comment">Comment:</label>
                    <input type="text" id='comment' className='pl-1 py-2 border rounded-lg outline-blue-500'
                        onChange={(e) => {
                            // setComment(e.target.value)
                            setUserData((prev) => {
                                return {...prev , comment:e.target.value}
                            })
                        }} />
                </div>

                <button className='bg-green-500 text-white rounded-lg px-5 py-2 w-[50%] mx-auto'
                onClick={() => {
                    // setData([userData])

                    setData((prev)=> {
                        return [...prev , userData]
                    } )
                }} >Submit</button>

                {
                    data.map((item , index) => {
                        return <div key={index}>
                            <h1> {item.name} </h1>
                            <p> {item.comment} </p>
                        </div>
                    })
                }                

            </div>
        </div>
    )
}

export default StatePratice