import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import s from "./styles.module.css";
import FormField from "../UI/FormField.tsx";
import GenderSelector from "./components/GenderSelector.tsx";
import type {AxiosError} from "axios";
import axios from "axios";
import {apiAuthURL} from "../../configs/constants.ts";
import Cookies from "js-cookie";
import {useStores} from "../../stores/root-store-context.ts";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [sex, setSex] = useState("М");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const {
        token: { setToken },
        modal: { setErrorModalActive }
    } = useStores();

    const navigate = useNavigate();


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name.trim() || !surname.trim() || !sex.trim() || !birthdate.trim() ||
            !email.trim() || !password.trim() || !repeatPassword.trim()) {
            return setErrorModalActive("Пожалуйста, заполните все поля.");
        }

        if (password !== repeatPassword) {
            return setErrorModalActive("Пароли не совпадают.");
        }

        try {
            const body = {
                name: (name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()).trim(),
                surname: (surname.trim().charAt(0).toUpperCase() + surname.trim().slice(1).toLowerCase()).trim(),
                sex: sex.trim(),
                birthdate: birthdate.trim(),
                email: email.trim(),
                password: password.trim()
            };

            const response = await axios.post(`${apiAuthURL}/registration`, body);

            // Очистка полей
            setName("");
            setSurname("");
            setSex("М");
            setBirthdate("");
            setEmail("");
            setPassword("");
            setRepeatPassword("");

            // Сохранение токена и переход
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
                    : "Ошибка регистрации. Попробуйте позже.";

            setErrorModalActive(errorMsg);
        }
    };

    return (
        <div className={s.registration}>
            <div className={`__container ${s.registration__container}`}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h3>Регистрация</h3>

                    <FormField
                        title="name"
                        text="Имя"
                        placeholder="Иван"
                        value={name}
                        onChange={setName}
                    />
                    <FormField
                        title="surname"
                        text="Фамилия"
                        placeholder="Иванов"
                        value={surname}
                        onChange={setSurname}
                    />

                    <GenderSelector sex={sex} setSex={setSex} />

                    <FormField
                        title="birthdate"
                        text="Дата рождения"
                        type="date"
                        placeholder=""
                        value={birthdate}
                        onChange={setBirthdate}
                    />
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
                    <FormField
                        title="repeatPassword"
                        text="Повтор пароля"
                        type="password"
                        placeholder="********"
                        value={repeatPassword}
                        onChange={setRepeatPassword}
                    />

                    <button type="submit" className={s.submitButton}>Зарегистрироваться</button>

                    <p className={s.loginLink}>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </p>
                </form>
            </div>
        </div>
    );
});

export default Registration;
