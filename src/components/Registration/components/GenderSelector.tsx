import React from 'react';
import s from "../styles.module.css";

const GenderSelector = ({sex, setSex}) => {
    return (
        <div className={s.genderSelector}>
            <span>Пол</span>
            <div className={s.genderButtons}>
                <button
                    type="button"
                    className={`${s.genderButton} ${sex === 'М' ? s.active : ''}`}
                    onClick={() => setSex("М")}
                >
                    М
                </button>
                <button
                    type="button"
                    className={`${s.genderButton} ${sex === 'Ж' ? s.active : ''}`}
                    onClick={() => setSex("Ж")}
                >
                    Ж
                </button>
            </div>
        </div>
    );
};

export default GenderSelector;