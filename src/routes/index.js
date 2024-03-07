import { Navigate } from "react-router-dom";
import { routes } from "../constants";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { authRoutes, mainRoutes, otherRoutes } from "./MainRoutes";

const getRoutes = (user) => {
  return [
    {
        path:"",
        element: !user ? <AuthLayout /> : <Navigate to={routes.dashboard}/>,
        children: authRoutes
    },
    {
        path:"",
        element: user ? <MainLayout /> : <Navigate to={routes.login}/>,
        children: mainRoutes
    },
    {
        path:"",
        element: !user ? <Navigate to={routes.login} /> : <PageNotFound />,
        children: otherRoutes
    }
  ]
}

export default getRoutes