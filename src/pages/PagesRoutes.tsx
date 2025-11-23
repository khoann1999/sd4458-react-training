import { requireAuth } from "../shared/LoginRequire.ts";
import NotFound from "../404.tsx";
import type { RouteObject } from "react-router";
import Pages from './Pages.tsx';
import userRoutes from './user/UserRoutes.tsx';
import HomePage from './home/HomePage.tsx';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '../shared/ProtectedRoute';

export async function pageLoader({ request }: { request: Request }) {
    const res = requireAuth(request);
    return res ? res : null;
}

const pagesRoutes: RouteObject[] = [
    {
        path: 'pages',
        element: <Pages />,
        children: [
            { path: '', element: <Navigate to="" replace /> },
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute allowedRoles={['admin']}>
                        <HomePage />
                    </ProtectedRoute>
                )
            },
            ...userRoutes,
            { path: '*', element: <NotFound /> }
        ]
    }
];

export default pagesRoutes;