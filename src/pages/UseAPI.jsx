import React, { useState } from 'react'
import { useEffect } from 'react'

const UseAPI = () => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)

    const fetchAPI = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (err) {
            
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div className='bg-gray-200'>
            <div className='w-[90%] md:w-[80%] mx-auto py-5'>
                
                {data.map((item) => {
                    return <div key={item.id} className='p-3 mb-4 bg-white border rounded-lg'>
                        <h1 className='text-xl font-bold underline'> {item.title} </h1>
                        <p>{item.body}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UseAPI