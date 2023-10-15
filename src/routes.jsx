import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
import SignInPage from "./Pages/SignInPage"
import SignUp from "./components/SignUp/SignUp";
import CategoryPage from "./Pages/CategoryPage";
import FavoritesPage from "./Pages/FavoritesPage";
import NotFoundPage from "./Pages/NotFoundPage";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<SignInPage />}/>
            <Route path="/register" element={<SignUp />}/>
            <Route path="/favorites" element={<FavoritesPage />}/>
            <Route path="/category/:id" element={<CategoryPage />}/>

            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}
 
export default RoutesApp;