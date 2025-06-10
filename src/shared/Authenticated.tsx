import { createContext, type ReactElement } from "react";

interface User {
    name: string;
    username: string;
}

var currentUser: any = null;

const AuthenticatedContext = createContext<User | null>(null);

const AuthenticatedProvider = ({children}: { children: ReactElement }) => {
    return (<AuthenticatedContext.Provider value={currentUser}>{children}</AuthenticatedContext.Provider>)
}
function setCurrentUser(user: any) {
    currentUser = user;
}
export { AuthenticatedProvider, AuthenticatedContext, setCurrentUser };