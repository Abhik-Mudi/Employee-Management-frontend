import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

// AdminDashboard component for admin functionalities
// It allows admin to create tasks and assign them to employees
const AdminDashboard = ({ handleLogOut }) => {
  const authData=useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault()

    const task={
      title,
      description,
      date, 
      category,
      active: false,
      newtask:true,
      completed: false,
      failed:false
    }
    console.log(assignTo)
    const employee=authData.employees.find(employee=> employee.name===assignTo )
    if(employee){
      employee.tasks.push(task)
    }
    console.log(authData.employees)
    localStorage.setItem("employees", JSON.stringify(authData.employees))
    setTitle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between  items-center'>
        <h2 className='font-medium'>Hello <br /> <span className='text-2xl font-bold '>Abhik👋</span></h2>
        <button onClick={handleLogOut} className='bg-red-500 px-4 py-2 rounded-lg'>Log Out</button>
      </div>
      <div className='mt-4 p-2 bg-gray-800 flex justify-around '>
        <form className='flex justify-around w-[95vw] mx-auto' onSubmit={(e)=>handleSubmit(e)} action="">
          <div className='w-[50%] p-3'>
            <h3 className='font-semibold text-xl'>Task Title</h3>
            <input onChange={(e) => { setTitle(e.target.value) }} value={title} className='border-1 w-[70%] rounded-lg p-2' type="text" placeholder='write a title' />
            <h3 className='mt-3 font-semibold text-xl'>Date</h3>
            <input onChange={(e) => { setDate(e.target.value) }} value={date} className='border-1 w-[70%] rounded-lg p-2' type="date" name="" id="" />
            <h3 className='mt-3 font-semibold text-xl'>Assign to</h3>
            <input onChange={(e) => { setAssignTo(e.target.value) }} value={assignTo} className='border-1 w-[70%] rounded-lg p-2' type="text" placeholder='whom to assign' />
            <h3 className='mt-3 font-semibold text-xl'>Category</h3>
            <input onChange={(e) => { setCategory(e.target.value) }} value={category} className='border-1 w-[70%] rounded-lg p-2' type="text" placeholder='category' />
          </div>
          <div className='w-[40%] p-3'>
            <h3 className='font-semibold text-xl'>Description</h3>
            <textarea onChange={(e) => { setDescription(e.target.value) }} value={description} className='border-1 w-full rounded-lg p-2 h-[220px] resize-none' placeholder='write description...' name="" id=""></textarea>
            <input type='submit' value='Create Task' className='bg-green-500 w-full rounded-xl h-10 mt-2'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
