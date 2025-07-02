import React from 'react';
import s from "../styles.module.css";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.ts";

const TopBar = observer(({categories, selectedCategory, setSelectedCategory}) => {
    const {
        modal: { setAddItemModalActive }
    } = useStores();

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
                <button onClick={() => setAddItemModalActive(true)} className={`${s.filterBtn} ${s.addBtn}`}>+</button>
            </div>
        </div>
    );
});

export default TopBar;