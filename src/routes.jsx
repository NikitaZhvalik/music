import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
import SignInPage from "./Pages/SignInPage"
import SignUp from "./components/SignUp/SignUp";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<SignInPage />}/>
            <Route path="/register" element={<SignUp />}/>
        </Routes>
    )
}
 
export default RoutesApp;