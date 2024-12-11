import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(() => {
    setLocalStorage()
     getlocalStorage()
  } );
  

  const [user, setUser] = useState ('')

  const  handleLogin = (email, password) =>{
    if(email == 'user@gmail.com' && password == '123'){
      console.log('user logged in');
      setUser('employee')
    }else if(email == 'admin@gmail.com' && password == '123'){
      setUser('admin')
      console.log('admin logged in');
    } else{
      alert('invalid credentials')
    }
  }

  return (
    <>
      
      {user === '' ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'employee' ? (
        <EmployeeDashboard />
      ) : (
        <AdminDashboard />
      )}
      
    </>
  )
}

export default App