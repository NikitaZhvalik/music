import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}
 
export default RoutesApp;