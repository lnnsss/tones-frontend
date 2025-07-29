import React, { useEffect } from 'react';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/root-store-context.ts";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../../utils/fetch-profile.ts";

const Profile = observer(() => {
    const {
        profile: {
            name, surname, sex, birthdate, avatarURL,
            setId, setName, setSurname, setSex, setBirthdate, setAvatarURL,
            clear
        },
        token: { token, clearToken },
    } = useStores();

    const navigate = useNavigate();

    useEffect(() => {
        const loadProfile = async () => {
            try {
                if (!token) {
                    clearToken();
                    navigate("/login");
                    return;
                }

                const data = await fetchProfile(token);
                setId(String(data.id));
                setName(data.name || "");
                setSurname(data.surname || "");
                setSex(data.sex || "");
                setBirthdate(data.birthdate?.slice(0, 10) || "");
                setAvatarURL(data.avatar || "");
            } catch (e) {
                console.error("Ошибка загрузки профиля:", e);
                clearToken();
                clear();
                navigate("/login");
            }
        };

        loadProfile();
    }, [token]);

    const handleLogout = () => {
        clearToken();
        clear();
        navigate("/login");
    };

    const handleEdit = () => {
        navigate("/edit-profile");
    };

    return (
        <div className={s.profile}>
            <div className="__container">
                <div className={s.profile__top}>
                    <img className={s.avatar} src={avatarURL || "/images/default-avatar.webp"} />
                    <h1>{name} {surname}</h1>
                </div>

                <div className={s.profile__info}>
                    <p><strong>Пол:</strong> {sex === 'М' ? 'Мужской' : sex === 'Ж' ? 'Женский' : 'Не указан'}</p>
                    <p><strong>Дата рождения:</strong> {birthdate}</p>
                </div>

                <div className={s.profile__actions}>
                    <button onClick={handleEdit}>Редактировать</button>
                    <button className={s.logout} onClick={handleLogout}>Выйти</button>
                </div>
            </div>
        </div>
    );
});

export default Profile;
