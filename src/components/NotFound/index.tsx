import React from 'react';
import s from "./styles.module.css";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={s.notFound}>
            <div className={`__container ${s.notFound__container}`}>
                <h1 className={s.title}>404</h1>
                <p className={s.subtitle}>Страница не найдена</p>
                <Link className={s.link} to="/">На главную</Link>
            </div>
        </div>
    );
};

export default NotFound;
