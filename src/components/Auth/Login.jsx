import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) =>{
     e.preventDefault()
    console.log('email is', email)
    console.log('password is', password)
    setEmail("")
    setPassword("")
    handleLogin(email, password)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='border-2  border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} action="" className='flex flex-col items-center justify-center '>
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} value={email} required className='border-2 outline-none bg-transparent placeholder:text-grey-100  border-emrald-600 rounded-full py-3 px-5 txt-xl' type="email" placeholder='enter your email' name="" id="" />
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} value={password} required className='border-2 outline-none bg-transparent placeholder:text-grey-100 mt-3  border-emrald-600 rounded-full py-3 px-5 txt-xl' type="password" placeholder='enter password' name="" id="" />
                    <button className='border-2 border-none outline-none placeholder:text-grey-100 mt-5 w-full bg-emerald-600  border-emrald-600 rounded-full py-2 px-5 txt-xl' >login</button>
                </form>
        </div>

    </div>
  )
}

export default Login