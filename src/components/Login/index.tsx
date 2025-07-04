import React, { useState } from 'react';
import s from "./styles.module.css";
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { apiAuthURL } from "../../configs/constants.ts";
import FormField from "../UI/FormField.tsx";
import { useStores } from "../../stores/root-store-context.ts";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const navigate = useNavigate();
    const {
        token: { setToken },
        modal: { setErrorModalActive }
    } = useStores();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            return setErrorModalActive("Пожалуйста, заполните все поля.");
        }

        try {
            const body = {
                email: email.trim(),
                password: password.trim()
            };

            const response = await axios.post(`${apiAuthURL}/login`, body);

            setEmail("");
            setPassword("");

            setToken(response.data.token);
            Cookies.set('jwt', response.data.token, { secure: true, sameSite: 'Strict' });

            const tokenPayload = JSON.parse(atob(response.data.token.split('.')[1]));
            if (Array.isArray(tokenPayload.roles) && tokenPayload.roles.includes('ADMIN')) {
                navigate('/admin');
            } else {
                navigate('/profile');
            }

        } catch (err) {
            const axiosError = err as AxiosError<{ message?: string }>;
            const errorMsg =
                axiosError.response?.data?.message
                    ? axiosError.response.data.message
                    : "Ошибка входа. Проверьте данные и попробуйте снова.";

            setErrorModalActive(errorMsg);
        }
    };

    return (
        <div className={s.login}>
            <div className={`__container ${s.login__container}`}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h3>Вход</h3>

                    <FormField
                        title="email"
                        text="Почта"
                        type="email"
                        placeholder="ivan@mail.ru"
                        value={email}
                        onChange={setEmail}
                    />
                    <FormField
                        title="password"
                        text="Пароль"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={setPassword}
                    />

                    <button type="submit" className={s.submitButton}>Войти</button>

                    <p className={s.regLink}>
                        Ещё нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                    </p>
                </form>
            </div>
        </div>
    );
});

export default Login;
