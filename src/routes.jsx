import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
import SignInPage from "./Pages/SignInPage"
import SignUp from "./components/SignUp/SignUp";
import CategoryPage from "./Pages/CategoryPage";
import FavoritesPage from "./Pages/FavoritesPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Cookies from "js-cookie";

const RoutesApp = () => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    
    useEffect(() => {
        setIsAuthorized(Cookies.get('user'))
    }, [isAuthorized])

    return (
        <Routes>
            <Route path="/login" element={<SignInPage />}/>
            <Route path="/register" element={<SignUp />}/>
            <Route element={<ProtectedRoute isAllowed={Cookies.get('user') ? true : false} redirectPath={"/login"} />}>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/favorites" element={<FavoritesPage />}/>
                <Route path="/category/:id" element={<CategoryPage />}/>
            </Route>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}
 
export default RoutesApp