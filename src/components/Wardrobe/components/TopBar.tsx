import React from 'react';
import s from "../styles.module.css";
import {Link} from "react-router-dom";

const TopBar = ({categories, selectedCategory, setSelectedCategory}) => {
    return (
        <div className={s.topBar}>
            <div className={s.filterMenu}>
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className={`${s.filterBtn} ${selectedCategory === cat ? s.active : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
                <Link to="add" className={`${s.filterBtn} ${s.addBtn}`}>+</Link>
            </div>
        </div>
    );
};

export default TopBar;