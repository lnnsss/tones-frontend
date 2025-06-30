// Header.jsx
import React from 'react';
import s from './styles.module.css';
import { useStores } from '../../stores/root-store-context';
import { Link, useLocation } from 'react-router-dom';
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const {
        header: { isMenuOpen, toggleMenu, isTransparent },
        token: { token }
    } = useStores();

    const location = useLocation();
    const isMainPage = location.pathname === '/';

    return (
        <header className={`${s.header} ${isMainPage && isTransparent ? s.transparent : ''}`}>
            <div className={`__container ${s.header__container}`}>
                <Link to="/" className={s.logo}>ТОНА</Link>

                <nav className={s.desktopNav}>
                    <ul>
                        <li><Link to="/wardrobe">Гардероб</Link></li>
                        <li><Link to="/shop">Магазин</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        {token ? (
                            <li><Link to="/profile">Профиль</Link></li>
                        ) : (
                            <>
                                <li><Link to="/registration">Регистрация</Link></li>
                                <li><Link to="/login">Вход</Link></li>
                            </>
                        )}
                    </ul>
                </nav>

                <button className={s.burger} onClick={toggleMenu}>
                    <span />
                </button>
            </div>

            <nav className={`${s.mobileMenu} ${isMenuOpen ? s.open : ''}`}>
                <ul>
                    <li><Link to="/wardrobe" onClick={toggleMenu}>Гардероб</Link></li>
                    <li><Link to="/shop" onClick={toggleMenu}>Магазин</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>О нас</Link></li>
                    {token ? (
                        <li><Link to="/account" onClick={toggleMenu}>Аккаунт</Link></li>
                    ) : (
                        <>
                            <li><Link to="/register" onClick={toggleMenu}>Регистрация</Link></li>
                            <li><Link to="/login" onClick={toggleMenu}>Вход</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
});

export default Header;
