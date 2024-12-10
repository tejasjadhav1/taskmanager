import React from 'react'
import Headers from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Headers/>

        <div>
            <form action="" className=' flex items-start justify-between' >
               <div> 
                    <h3>Task Title</h3>
                    <input type="text" placeholder='enter task' />
               </div>

               <div>
                    <h3>Description</h3>
                    <textarea name="" id=""></textarea>
               </div>
                
                <div>
                    <h3>Date</h3>
                    <input type="date"/>
                </div>

                <div>
                    <h3>Assign To</h3>
                    <input type="text" placeholder='employee name' name="" id="" />
                </div>

                <div>
                    <h3>Category</h3>
                    <input type="text" placeholder='Design, Dev, etc' name="" id="" />
                </div> 

                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard