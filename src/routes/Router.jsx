import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const Router = createBrowserRouter([
    {
        path: "/" ,
        element : <MainLayout /> ,
        errorElement: <Error /> ,
        children : [
            {
                index: true ,
                element : <Home />
            },
            {
                path : "/products" ,
                element : <ProductListing />
            },
            {
                path : "/products/:productId" ,
                element : <ProductDetails/>
            }
        ]
    }
])