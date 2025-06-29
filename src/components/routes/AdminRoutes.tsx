import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/admin/MainPage.tsx";
import NotFoundPage from "../pages/user/NotFoundPage.tsx";

const AdminRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/admin" element={<MainPage />} />

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AdminRoutes;