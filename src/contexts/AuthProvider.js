import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { deleteItemFromLocalStorage, getUserCredentials, saveUserCredentials } from "../components/localStorage";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const localData = getUserCredentials();
        if (localData.userData) {
            signIn(localData.userData)
        }
    }, [])

    function signIn(data) {
        setUser(data);
        saveUserCredentials(data);
    };

    function signOut() {
        setUser(null);
        deleteItemFromLocalStorage();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
            }} >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => { return useContext(AuthContext) };

export default AuthProvider;