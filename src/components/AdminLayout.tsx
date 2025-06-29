import React from "react"
import Header from "./Admin/components/Header";
import AdminRoutes from "./routes/AdminRoutes.tsx";

const AdminLayout: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <AdminRoutes />
            </main>
        </>
    )
}

export default AdminLayout