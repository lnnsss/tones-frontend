import React, { useState } from 'react';
import s from "../styles.module.css";
import FormField from "../../UI/FormField.tsx";
import ImageUpload from "./ImageUpload.tsx";
import {useStores} from "../../../stores/root-store-context.ts";

const AddItemModal = () => {
    const {
        modal: { closeModals }
    } = useStores();
    const [title, setTitle] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [subcategory, setSubcategory] = useState<string>("");
    const [season, setSeason] = useState<string>("");
    const [fit, setFit] = useState<string>("");

    const handleAdd = () => {
        closeModals();
    }

    return (
        <div className={s.addItemModal}>
            <div className={s.addItemModal__scroll}>
                <h2 className={s.addItemModal__title}>Добавить вещь в гардероб</h2>
                <FormField title="title" text="Название" placeholder="Моя любимая тишка" value={title} onChange={setTitle} />
                <FormField title="color" text="Цвет" placeholder="Белый" value={color} onChange={setColor} />
                <FormField title="brand" text="Бренд" placeholder="Тона" value={brand} onChange={setBrand} />
                <FormField title="category" text="Категория" placeholder="Футболки" value={category} onChange={setCategory} />
                <FormField title="subcategory" text="Подкатегория" placeholder="Футболка" value={subcategory} onChange={setSubcategory} />
                <FormField title="season" text="Сезон" placeholder="Лето" value={season} onChange={setSeason} />
                <FormField title="fit" text="Фит" placeholder="Оверсайз" value={fit} onChange={setFit} />

                <ImageUpload/>
            </div>

            <button className={s.addItemModal__btn} onClick={handleAdd} >Добавить</button>
        </div>
    );
};

export default AddItemModal;
