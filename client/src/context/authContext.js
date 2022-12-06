import React, { createContext, useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from '../utils/firebase/credentials'
export const authContext = createContext()

//USEAUTH
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("There ir no Auth provider")
    }
    return context
}


//AUTH PROVIDER
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(loading)

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password)

    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsub()
    }, [])

    return (
        <authContext.Provider value={{ signUp, login, logOut, user, loading }}>
            {children}
        </authContext.Provider>
    )
}