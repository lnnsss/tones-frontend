import React from 'react';
import s from "../styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../stores/root-store-context.ts";

const TopBar = observer(({
                             categories, selectedCategory, setSelectedCategory,
                             colors, selectedColor, setSelectedColor,
                             seasons, selectedSeason, setSelectedSeason,
                             fits, selectedFit, setSelectedFit
                         }) => {
    const {
        modal: { setAddItemModalActive }
    } = useStores();

    const renderLabeledSelect = (label, options, value, onChange) => (
        <div className={s.selectBlock}>
            <label className={s.selectLabel}>{label}</label>
            <select value={value} onChange={e => onChange(e.target.value)} className={s.customSelect}>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );

    return (
        <div className={s.topBar}>
            <div className={s.selectFilters}>
                {renderLabeledSelect("Категория", categories, selectedCategory, setSelectedCategory)}
                {renderLabeledSelect("Цвет", colors, selectedColor, setSelectedColor)}
                {renderLabeledSelect("Сезон", seasons, selectedSeason, setSelectedSeason)}
                {renderLabeledSelect("Фит", fits, selectedFit, setSelectedFit)}

                <button
                    onClick={() => setAddItemModalActive(true)}
                    className={`${s.filterBtn} ${s.addBtn}`}
                >
                    +
                </button>
            </div>
        </div>
    );
});

export default TopBar;
