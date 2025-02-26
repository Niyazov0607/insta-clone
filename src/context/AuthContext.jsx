import { createContext, useEffect, useState } from "react";
import { apiClient } from "../config/apiConfig";

const AuthContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(() => {
        if (token) {
            apiClient.defaults.headers.common["Authorization"] =
                "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete apiClient.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
        localStorage.setItem("user", JSON.stringify(user));
    }, [user, token]);

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
