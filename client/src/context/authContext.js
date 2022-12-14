import React, { createContext, useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, setPersistence, browserLocalPersistence } from "firebase/auth"
import { auth } from '../utils/firebase/credentials'
import { useDispatch } from "react-redux"
export const authContext = createContext()
//actions

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
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(loading);

    //GOOGLE LOG IN
    const logInGoogle = async () => {
        await setPersistence(auth, browserLocalPersistence)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    //SING UP
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    //LOG IN
    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        await setPersistence(auth, browserLocalPersistence)

    }
    //LOG OUT
    const logOut = () => signOut(auth)

    //RESET PASSWORD
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    //RECIBE UN FIREBASE USER Y DEVUELVO NUESTRO USER
    const getUserData = async (firebaseUser) => {
        const user = formatUserData(firebaseUser)
        try {
            console.log("user", user)
        } catch (error) {
            console.log(error)
            return null
        }

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
            } else {
                setUser(null)
            }
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
