import { routes } from "../constants";
import { Navigate } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";

// AUTH ROUTES
export const authRoutes = [
    { path: routes.homePage, element: <Navigate to={routes.login} /> },
    { path: routes.login, element: <LoginPage /> },
];

// MAIN ROUTES
export const mainRoutes = [
    { path: routes.homePage, element: <Navigate to={routes.login} /> },
    { path: routes.dashboard, element: <Dashboard /> },
];

// OTHER PAGE 404 ROUTES
export const otherRoutes = [
    { path: "*", element: <LoginPage /> },
    { path: routes.login, element: <LoginPage /> },
];