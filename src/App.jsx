import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      {/* <Login/> */}
      <EmployeeDashboard/>
      {/* <AdminDashboard/>  */} {/* ------ currently working, so uncomment this and comment EployeeDashboard */}
      
    </>
  )
}

export default App