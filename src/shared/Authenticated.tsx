import { createContext, type ReactElement, useState, useCallback } from "react";
import { type User } from '../types/userTypes';

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthenticatedContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {}
});

const AuthenticatedProvider = ({children}: { children: ReactElement }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = useCallback((userData: User) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }, []);

    // Initialize user from localStorage on mount
    useState(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    });

    return (
        <AuthenticatedContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthenticatedContext.Provider>
    );
};

export { AuthenticatedProvider, AuthenticatedContext };