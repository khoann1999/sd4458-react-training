import { requireAuth } from "../shared/LoginRequire.ts";
import NotFound from "../404.tsx";
import type { RouteObject } from "react-router";
import Pages from './Pages.tsx';
import userRoutes from './User/UserRoutes.tsx';
import HomePage from './Home/HomePage.tsx';
import { Navigate } from 'react-router-dom';
import adminRoutes from './Admin/AdminRoute.tsx';
import productRoutes from './Products/ProductRoutes.tsx';
import ReviewPage from "./Review/ReviewPage.tsx";
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
            { path: '', element: <Navigate to="home" replace /> },
            {
                path: 'home',
                element: (
                    <ProtectedRoute allowedRoles={['admin', 'user']}>
                        <HomePage />
                    </ProtectedRoute>
                )
            },
            {
                path: 'review',
                element: (
                    <ProtectedRoute allowedRoles={['admin']}>
                        <ReviewPage />
                    </ProtectedRoute>
                )
            },
            ...userRoutes,
            ...adminRoutes,
            ...productRoutes,
            { path: '*', element: <NotFound /> }
        ]
    }
];

export default pagesRoutes;