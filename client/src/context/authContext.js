import React, { createContext, useContext, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
//Actions
import { getUserDashboards } from "../redux/features/users/usersActions"
//FirebaseAuth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, } from "firebase/auth"
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
    const [user, setUser] = useState(null);
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //GOOGLE LOG IN
    const logInGoogle = async () => {
        const googleProvider = new GoogleAuthProvider()
        //setPersistence(auth, browserLocalPersistence)
        return signInWithPopup(auth, googleProvider)
    }

    //DELETE USER
    const deleteUserFB = async (user) => {
        try {
            const deleted = await deleteUser(user)
            return deleted
        } catch (error) {
            console.log(error)
            return error
        }
    }

    //EMAIL VERIFICATION
    const emailVerification = async (firebaseUser) => {
        try {
            const response = await sendEmailVerification(firebaseUser)
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }

    //SING UP
    const signUp = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            return response
        } catch (error) {
            console.log("error", error)
            return null
        }
    }

    //LOG IN
    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        //dispatch(sendMail(user, template))
        // setPersistence(auth, browserLocalPersistence)
    }

    //LOG OUT
    const logOut = () => signOut(auth)

    //RESET PASSWORD
    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email)
    }

    //RECIBE UN FIREBASE USER Y DEVUELVO NUESTRO USER
    const getUserData = (firebaseUser) => {
        const userFormated = formatUserData(firebaseUser)
        try {
            return userFormated
        } catch (error) {
            return null
        }
    }

    //FORAMTEO DE FIREBASEUSER
    const formatUserData = (firebaseUser) => {
        const {
            displayName,
            uid, email, emailVerified
        } = firebaseUser;

        const userCredentials = {
            username: displayName || "",
            uid: uid,
            email: email,
            emailVerified
        }
        return userCredentials
    }

    //VIEWER
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setFirebaseUser(firebaseUser)
                const userData = await getUserData(firebaseUser)
                dispatch(getUserDashboards(userData.uid))   // AGREGADO POR EL BIEN DE LA TRAMA
                setUser(userData)
                setLoading(false)
            } else {
                dispatch(getUserDashboards())
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsub()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            < authContext.Provider value={{ signUp, logIn, logOut, logInGoogle, resetPassword, user, loading, deleteUserFB, emailVerification, firebaseUser }
            }>
                {children}
            </authContext.Provider >
        </>
    )
}
