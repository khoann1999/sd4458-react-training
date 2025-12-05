import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticatedContext } from './Authenticated';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { user } = useContext(AuthenticatedContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/pages/home" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute; 