import React from 'react'

const CreateTask = () => {
  return (
   
        <div>
            <form action="" className=' flex mt-5 flex-wrap p-10 bg-[#1c1c1c] w-full items-start justify-between' >
                <div className='w-1/2'>
                    <div className='mb-4'> 
                        <h3 className='text-white mb-2'>Task Title</h3>
                        <input className='rounded text-black p-2' type="text" placeholder='enter task' />
                    </div>

                    <div className='mb-4'>
                        <h3 className='text-white mb-2' >Date</h3>
                        <input className='rounded text-black p-2' type="date"/>
                    </div>

                    <div className='mb-4'>
                        <h3  className='text-white mb-2'>Assign To</h3>
                        <input className='text-black rounded p-2' type="text" placeholder='employee name' name="" id="" />
                    </div>

                    <div>
                        <h3  className='text-white mb-2'>Category</h3>
                        <input className='text-black rounded p-2'  type="text" placeholder='Design, Dev, etc' name="" id="" />
                    </div> 

                </div>
               
                <div className='w-1/2'>
                        <h3  className='text-white mb-2'>Description</h3>
                        <textarea name="" id=""></textarea>
                        <br />
                        <button className='text-white bg-green-500 p-2 rounded' >Create Task</button>
                </div>
                
            </form>
        </div>
  
  )
}

export default CreateTask