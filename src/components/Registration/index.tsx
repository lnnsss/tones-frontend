import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./styles.module.css";
import FormField from "../UI/FormField.tsx";
import GenderSelector from "./components/GenderSelector.tsx";

const Registration = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("М");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <div className={s.registration}>
            <div className={`__container ${s.registration__container}`}>
                <form className={s.form}>
                    <h3>Регистрация</h3>

                    <FormField
                        title="name"
                        text="Имя"
                        placeholder="Иван"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormField
                        title="surname"
                        text="Фамилия"
                        placeholder="Иванов"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />

                    <GenderSelector gender={gender} setGender={setGender} />

                    <FormField
                        title="birthdate"
                        text="Дата рождения"
                        type="date"
                        placeholder=""
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
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
                    <FormField
                        title="repeatPassword"
                        text="Повтор пароля"
                        type="password"
                        placeholder="********"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />

                    <button type="submit" className={s.submitButton}>Зарегистрироваться</button>

                    <p className={s.loginLink}>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
