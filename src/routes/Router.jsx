import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path: "/" ,
        element : <MainLayout /> ,
        errorElement: <Error /> ,
        children : [
            {
                index: true ,
                element : <Home />
            }
        ]
    }
])