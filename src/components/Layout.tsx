import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import MainRoutes from "./routes/MainRoutes.tsx";

const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="main__container">
                    <MainRoutes />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Layout