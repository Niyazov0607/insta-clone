import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/registration";
import ProtectedRouter from "./ProtectedRouter";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRouter>
                        <Home />
                    </ProtectedRouter>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    );
};

export default AppRoutes;
