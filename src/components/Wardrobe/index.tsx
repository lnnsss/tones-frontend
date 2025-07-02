import React, { useState } from 'react';
import s from "./styles.module.css";
import {items} from "./items.ts";
import Card from "./components/Card.tsx";
import TopBar from "./components/TopBar.tsx";

const getUniqueCategories = (items) => {
    return [...new Set(items.map(item => item.category))];
};

const Wardrobe: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...getUniqueCategories(items)];

    const filteredItems = selectedCategory === "All"
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className={s.wardrobe}>
            <div className={`__container ${s.wardrobe__container}`}>

                <TopBar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <div className={s.grid}>
                    {filteredItems.map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Wardrobe;