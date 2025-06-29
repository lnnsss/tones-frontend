import React from "react"
import { Helmet } from "react-helmet"
import Main from "../../Admin/components/Main";

const MainPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Админ-панель</title>
            </Helmet>
            <Main/>
        </>
    )
}

export default MainPage