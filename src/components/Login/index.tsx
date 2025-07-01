import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./styles.module.css";
import FormField from "../UI/FormField.tsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={s.login}>
            <div className={`__container ${s.login__container}`}>
                <form className={s.form}>
                    <h3>Вход</h3>

                    <FormField
                        title="email"
                        text="Почта"
                        type="email"
                        placeholder="ivan@mail.ru"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormField
                        title="password"
                        text="Пароль"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className={s.submitButton}>Войти</button>

                    <p className={s.regLink}>
                        Ещё нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
