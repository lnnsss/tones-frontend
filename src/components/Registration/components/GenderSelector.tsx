import React from 'react';
import s from "../styles.module.css";

const GenderSelector = ({gender, setGender}) => {
    return (
        <div className={s.genderSelector}>
            <span>Пол</span>
            <div className={s.genderButtons}>
                <button
                    type="button"
                    className={`${s.genderButton} ${gender === 'М' ? s.active : ''}`}
                    onClick={() => setGender("М")}
                >
                    М
                </button>
                <button
                    type="button"
                    className={`${s.genderButton} ${gender === 'Ж' ? s.active : ''}`}
                    onClick={() => setGender("Ж")}
                >
                    Ж
                </button>
            </div>
        </div>
    );
};

export default GenderSelector;