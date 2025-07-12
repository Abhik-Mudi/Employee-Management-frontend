import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

// EmployeeDashboard component for employee functionalities
// It allows employees to view and manage their tasks
const EmployeeDashboard = ({ handleLogOut, loggedInUser }) => {
  const authData=useContext(AuthContext)

  const [employee, setEmployee] = useState(()=>JSON.parse(localStorage.getItem('loggedInUser')) || '')

  const getPriorityColor = (priority, level = 500) => {
    switch (priority?.toLowerCase()) {
      case 'high': return `bg-red-${level}`
      case 'medium': return `bg-yellow-${level}`
      case 'low': return `bg-green-${level}`
      default: return `bg-blue-${level}`
    }
  }

  const handleAccept=(tasktitle)=>{
    const emp=authData.employees.find(em=>em.id===employee.id)
    if(emp){
      const task=emp.tasks.find(task=>task.title===tasktitle)
      if(task){
        task.active=true
        task.newtask=false

        localStorage.setItem("employees", JSON.stringify(authData.employees))

        const updatedUser=authData.employees.find(em=>em.id===employee.id)
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser))
        setEmployee(updatedUser)
      }

    }
  }

  const handleComplete=(tasktitle)=>{
    const emp=authData.employees.find(em=>em.id===employee.id)
    if(emp){
      const task=emp.tasks.find(task=>task.title===tasktitle)
      if(task){
        task.active=false
        task.completed=true

        localStorage.setItem("employees", JSON.stringify(authData.employees))

        const updatedUser=authData.employees.find(em=>em.id===employee.id)
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser))
        setEmployee({...updatedUser})
      }

    }
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between  items-center'>
        <h2 className='font-medium'>Hello <br /> <span className='text-2xl font-bold '>{employee.name}👋</span></h2>
        <button onClick={handleLogOut} className='bg-red-500 px-4 py-2 rounded-lg'>Log Out</button>
      </div>
      <div className='mt-4 flex gap-3'>
        <div className='bg-blue-500 w-[40%] p-3 rounded-2xl'>
          <h3 className='text-xl'>{employee.tasks.filter(task => task.newtask).length}</h3>
          <h4 className='text-lg font-semibold'>New Task</h4>
        </div>
        <div className='bg-red-500 w-[40%] p-3 rounded-2xl'>
          <h3 className='text-xl'>{employee.tasks.filter(task => task.completed).length}</h3>
          <h4 className='text-lg font-semibold'>Completed Task</h4>
        </div>
        <div className='bg-green-500 w-[40%] p-3 rounded-2xl'>
          <h3 className='text-xl'>{employee.tasks.filter(task => task.active).length}</h3>
          <h4 className='text-lg font-semibold'>Accepted Task</h4>
        </div>
        <div className='bg-yellow-500 w-[40%] p-3 rounded-2xl'>
          <h3 className='text-xl'>{employee.tasks.filter(task => task.failed).length}</h3>
          <h4 className='text-lg font-semibold'>Failed Task</h4>
        </div>
      </div>
      <div id='tasks' className='flex mt-5 gap-3 flex-nowrap overflow-x-auto'>
        {employee.tasks.map((task, index) => {
          return (
            <div key={index} className={`flex-shrink-0 relative mt-8 ${getPriorityColor(task.priority)} p-3 rounded-md w-[30%] h-70`}>
              <div className='flex justify-between mb-6'>
                <button className={`border-2 text-black font-semibold border-black px-2 py-1 rounded-md`}>{task.category}</button>
                <span className='font-semibold text-black'>Due date: {task.date}</span>
              </div>
              <h3 className='font-bold text-3xl'>{task.title}</h3>
              <p className='mt-2 font-semibold'>{task.description}</p>
              
              <div className='absolute bottom-2 left-2 flex gap-2'>
                {task.newtask && (
                  <button onClick={(e)=>{handleAccept(task.title)}} className='bg-blue-700 px-2 py-1 rounded-md font-semibold'>Accept Task</button>
                )}
                {task.active && (
                  <button onClick={(e)=>{handleComplete(task.title)}} className='bg-green-700 px-2 py-1 rounded-md font-semibold'>Complete Task</button>
                )}
                {task.failed && (
                  <button className='bg-gray-500 px-2 py-1 rounded-md font-semibold'>Failed</button>
                )}
                {task.completed && (
                  <button className='bg-pink-500 px-2 py-1 rounded-md font-semibold'>Completed</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EmployeeDashboard
