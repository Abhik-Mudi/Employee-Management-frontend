import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage'

// authentication context to provide user data across the application
export const AuthContext = createContext()

// AuthProvider component to wrap around the application
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
