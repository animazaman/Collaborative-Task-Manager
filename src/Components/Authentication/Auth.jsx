import {useState, createContext, useContext} from "react"

const AuthContext = createContext(null);

export const AuthProvider = ({Children}) =>{

    const [user, setUser] = useState(null)

    const signin = user =>{
        setUser(user);
    }

    const signout = () =>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
        {Children}
    </AuthContext.Provider>
    ) 
}

export const useAuth = () =>{
    return useContext(AuthContext);
}