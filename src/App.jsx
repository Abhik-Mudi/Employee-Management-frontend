import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'
import { setLocalStorage } from './Utils/localStorage'

const App = () => {
  // State to manage user type and logged in user
  const [user, setUser] = useState(()=>localStorage.getItem("userType") || '')
  const [loggedInUser, setLoggedInUser] = useState(()=>JSON.parse(localStorage.getItem("loggedInUser")) || '')

  
  const authData=useContext(AuthContext)
  console.log(authData)
  console.log(loggedInUser)

  // After the submission of login form, this function will be called
  const handleSubmit=(email, password)=>{
    if(authData.admin.email===email && authData.admin.password===password){
      setUser('admin')
      setLoggedInUser(authData.admin)
      localStorage.setItem('userType', 'admin')
      localStorage.setItem("loggedInUser", JSON.stringify(authData.admin))
    }else if(authData.employees.find(e=>e.email==email && e.password==password)){
      setUser('employee')
      localStorage.setItem('userType', 'employee')

      let index=authData.employees.findIndex(e=>e.email==email && e.password==password)
      setLoggedInUser(authData.employees[index])
      localStorage.setItem("loggedInUser", JSON.stringify(authData.employees[index]))
    }else{
      alert("Wrong Credentials")
    }
  }

  // This function will be called when user clicks on logout button
  const handleLogOut=()=>{
    setUser('')
    setLoggedInUser('')
    localStorage.removeItem('userType')
    localStorage.removeItem('loggedInUser')
  }
  
  return (
    <>
      {!loggedInUser && <Login handleSubmit={handleSubmit}/>}
      {loggedInUser && user=='admin'?<AdminDashboard handleLogOut={handleLogOut}/>:''}
      {loggedInUser && user=='employee'?<EmployeeDashboard handleLogOut={handleLogOut} userData={loggedInUser}/>:''}
      
    </>
  )
}

export default App
