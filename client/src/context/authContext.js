import React, { createContext, useContext, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
//Actions
import { findOrCreateUser } from "../redux/features/users/usersActions"
//FirebaseAuth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, setPersistence, browserLocalPersistence } from "firebase/auth"
import { auth } from '../utils/firebase/credentials'

//USEAUTH
export const authContext = createContext()
export const useAuth = () => {
    const context = useContext(authContext)
    return context
};

//AUTH PROVIDER
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    //STATES
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    //GOOGLE LOG IN
    const logInGoogle = async () => {
        const googleProvider = new GoogleAuthProvider()
        // setPersistence(auth, browserLocalPersistence)
        return signInWithPopup(auth, googleProvider)
    }

    //SING UP
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    //LOG IN
    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        // setPersistence(auth, browserLocalPersistence)
    }

    //LOG OUT
    const logOut = () => signOut(auth)

    //RESET PASSWORD
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    //RECIBE UN FIREBASE USER Y DEVUELVO NUESTRO USER
    const getUserData = (firebaseUser) => {
        const userFormated = formatUserData(firebaseUser)
        try {
            dispatch(findOrCreateUser(userFormated))
            console.log(userFormated)
        } catch (error) {
            console.log(error)
            return null
        }
        return userFormated
    }

    //FORAMTEO DE FIREBASEUSER
    const formatUserData = (firebaseUser) => {
        const {
            uid, email
        } = firebaseUser;

        const user = {
            uid: uid,
            email: email
        }
        return user
    }

    //VIEWER
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const userData = await getUserData(firebaseUser)
                setUser(userData)
                dispatch(findOrCreateUser(userData))
                setLoading(false)
            } else {
                setUser(null)
                console.log("user en else", user)
            }
            setLoading(true)
        })
        return () => unsub()
    }, [])
    return (
        <>
            < authContext.Provider value={{ signUp, logIn, logOut, logInGoogle, resetPassword, user, loading }
            }>
                {children}
            </authContext.Provider >
        </>
    )
}
