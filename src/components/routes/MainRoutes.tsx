import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.tsx";

import MainPage from "../pages/user/MainPage.tsx";
import WardrobePage from "../pages/user/WardrobePage.tsx";
import OutfitsPage from "../pages/user/OutfitsPage.tsx";
import ShopPage from "../pages/user/ShopPage.tsx";
import AboutPage from "../pages/user/AboutPage.tsx";
import RegistrationPage from "../pages/user/RegistrationPage.tsx";
import LoginPage from "../pages/user/LoginPage.tsx";
import ProfilePage from "../pages/user/ProfilePage.tsx";
import NotFoundPage from "../pages/user/NotFoundPage.tsx";

const MainRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/wardrobe" element={<WardrobePage />} />
            <Route path="/outfits" element={<OutfitsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Публичные маршруты для регистрации и входа */}
            <Route element={<ProtectedRoute isProtected={false} redirectTo="/account" />}>
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* Защищенные маршруты для обычных пользователей */}
            <Route element={<ProtectedRoute isProtected={true} redirectTo="/registration" />}>
                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainRoutes;