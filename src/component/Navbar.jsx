import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-800'>
        <div className='flex w-[90%] md:w-[89%] lg:w-[89%] mx-auto pt-2 text-white pb-2'>
            <div className='flex flex-col gap-1 w-[100%] items-start'>
                <h1 className='text-3xl font-bold'>Santhosh</h1>
                <p>React Developer</p>
            </div>
            <div className='flex items-center w-[100%] '>
                <ul className='flex justify-between w-full'>
                    <li className='transition duration-300 hover:scale-x-110 hover:text-gray-200 hover:cursor-pointer'>Home</li>
                    <li className='transition duration-300 hover:scale-x-110 hover:text-gray-200 hover:cursor-pointer'>About</li>
                    <li className='transition duration-300 hover:scale-x-110 hover:text-gray-200 hover:cursor-pointer'>Projects</li>
                    <li className='transition duration-300 hover:scale-x-110 hover:text-gray-200 hover:cursor-pointer'>Counter</li>
                    <li className='transition duration-300 hover:scale-x-110 hover:text-gray-200 hover:cursor-pointer'>Todo</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar