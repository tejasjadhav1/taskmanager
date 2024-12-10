import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist"  className='h-[55%] overflow-auto flex items-center justify-start flex-nowrap gap-5 l w-full py-5  mt-10'>

        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl' >
                <div className='flex  justify-between items-center '>
                    <h3 className='bg-red-600  text-sm  px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make Money</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae harum nesciunt doloremque nam enim!
                </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl' >
                <div className='flex  justify-between items-center '>
                    <h3 className='bg-red-600  text-sm  px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make Money</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae harum nesciunt doloremque nam enim!
                </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl' >
                <div className='flex  justify-between items-center '>
                    <h3 className='bg-red-600  text-sm  px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make Money</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae harum nesciunt doloremque nam enim!
                </p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl' >
                <div className='flex  justify-between items-center '>
                    <h3 className='bg-red-600  text-sm  px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make Money</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae harum nesciunt doloremque nam enim!
                </p>
        </div>
       
    </div>
  )
}

export default TaskList