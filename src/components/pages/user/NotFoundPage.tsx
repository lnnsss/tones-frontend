import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from "../../NotFound";

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Страница не найдена</title>
            </Helmet>
            <NotFound/>
        </>
    );
};

export default NotFoundPage;