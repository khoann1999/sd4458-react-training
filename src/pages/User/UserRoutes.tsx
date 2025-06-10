import { Navigate, type RouteObject } from "react-router-dom";
import UserPage from './UserPage.tsx';
import UserKYCPage from './UserKYCPage.tsx';
import UserProfilePage from './UserProfilePage.tsx';
import ProtectedRoute from '../../shared/ProtectedRoute';

const userRoutes: RouteObject[] = [
    {
        path: 'users',
        element: <UserPage />,
        children: [
            { path: '', element: <Navigate to="list" replace /> },
            {
                path: ':id/kyc',
                element: (
                    <ProtectedRoute allowedRoles={['admin', 'user']}>
                        <UserKYCPage />
                    </ProtectedRoute>
                )
            },
            {
                path: ':id/edit',
                element: (
                    <ProtectedRoute allowedRoles={['admin', 'user']}>
                        <UserProfilePage />
                    </ProtectedRoute>
                )
            },
            {
                path: ':id/details',
                element: (
                    <ProtectedRoute allowedRoles={['admin', 'user']}>
                        <UserProfilePage />
                    </ProtectedRoute>
                )
            }
        ]
    }
];

export default userRoutes;