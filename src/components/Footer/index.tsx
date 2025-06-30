import React from 'react';
import s from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`__container ${s.footer__container}`}>
                <ul className={s.footer__section}>
                    <li><strong>Tones. 2025.</strong></li>
                    <li>Все права защищены.</li>
                </ul>

                <ul className={s.footer__section}>
                    <h5>Поддержка</h5>
                    <li><a href="#">Чат с поддержкой</a></li>
                    <li><a href="#">Конфиденциальность</a></li>
                </ul>

                <ul className={s.footer__section}>
                    <h5>Контакты</h5>
                    <li><a href="https://m.vk.com/l1lines " target="_blank" rel="noopener noreferrer">VK</a></li>
                    <li><a href="https://www.instagram.com/l1lines " target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://t.me/l1lines " target="_blank" rel="noopener noreferrer">Telegram</a></li>
                    <li><a href="https://github.com/lnnsss " target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;