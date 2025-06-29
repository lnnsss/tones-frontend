import React from 'react';
import {Helmet} from "react-helmet";
import Login from "../../Login";

const LoginPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Login />
        </>
    )
}

export default LoginPage;