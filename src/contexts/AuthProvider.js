import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signIn(data) {
        setUser(data);
    };

    function signOut() {
        setUser(null);
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