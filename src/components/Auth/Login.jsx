import React, { useState } from 'react'

// Login component to handle user login
const Login = ({handleSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex justify-center items-center '>
            <div className='rounded-xl h-[90vh] w-[30vw] my-6 p-3 flex flex-col gap-30 bg-[#1C1C1C] font-bold text-2xl'>
                <h1 className='mt-3 w-30 flex '>Log In</h1>

                <form onSubmit={(e) => { onSubmit(e) }} className='flex flex-col gap-2' action="">
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} className='border-2 border-emerald-600 rounded-full p-2 font-light outline-none text-lg' type="email" placeholder='email' />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className='border-2 border-emerald-600 rounded-full p-2 font-light outline-none text-lg' type="password" placeholder='password' />
                    <div className='flex items-center m-3 text-xs font-normal justify-between'>
                        <div>
                            <input type="checkbox" name="" id="" className='w-3 mx-2' />
                            <span className=''>Remember Me</span>
                        </div>
                        <a className='' href="">forget password?</a>
                    </div>
                    <input className='w-30 rounded-full p-2 bg-emerald-600' type="submit" value="Log In" />
                </form>
            </div>
        </div>
    )
}

export default Login
