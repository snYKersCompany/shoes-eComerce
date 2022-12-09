import React, { createContext, useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth"
import { auth } from '../utils/firebase/credentials'
export const authContext = createContext()

//USEAUTH
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("There ir no Auth provider");
    }
    return context;
};

//AUTH PROVIDER
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(loading);

    //GOOGLE LOG IN
    const logInGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }


    //SING UP
    const signUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    //LOG IN
    const logIn = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    //LOG OUT
    const logOut = () => signOut(auth)

    //RESET PASSWORD
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    //VIEWER
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsub()
    }, [])

    return (
        <authContext.Provider value={{ signUp, logIn, logOut, logInGoogle, resetPassword, user, loading }}>
            {children}
        </authContext.Provider>
    )
}
