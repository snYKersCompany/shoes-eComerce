import { createContext, useContext } from "react"

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("There ir no Auth provider")
    }
    return context
}

const AuthProvider = ({ children }) => {
    const user = {
        login: true,
        id: "",
        name: "",
        password: "",
        phone: "",
        address: "",
        image: "",
        admin: undefined
    }


    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}

export default { AuthProvider, useAuth }