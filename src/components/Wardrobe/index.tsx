import React, { useState } from 'react';
import s from "./styles.module.css";
import Card from "./components/Card.tsx";
import TopBar from "./components/TopBar.tsx";
import { useStores } from "../../stores/root-store-context.ts";
import { observer } from "mobx-react-lite";

const getUnique = (items, key) => {
    return [...new Set(items.map(item => item[key]).filter(Boolean))];
};

const Wardrobe: React.FC = observer(() => {
    const {
        wardrobe: { items }
    } = useStores();

    const [selectedCategory, setSelectedCategory] = useState("Все");
    const [selectedColor, setSelectedColor] = useState("Все");
    const [selectedSeason, setSelectedSeason] = useState("Все");
    const [selectedFit, setSelectedFit] = useState("Все");

    const categories = ["Все", ...getUnique(items, "category")];
    const colors = ["Все", ...getUnique(items, "color")];
    const seasons = ["Все", ...getUnique(items, "season")];
    const fits = ["Все", ...getUnique(items, "fit")];

    const filteredItems = items.filter(item => {
        return (selectedCategory === "Все" || item.category === selectedCategory)
            && (selectedColor === "Все" || item.color === selectedColor)
            && (selectedSeason === "Все" || item.season === selectedSeason)
            && (selectedFit === "Все" || item.fit === selectedFit);
    });

    return (
        <div className={s.wardrobe}>
            <div className={`__container ${s.wardrobe__container}`}>
                <TopBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    colors={colors}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    seasons={seasons}
                    selectedSeason={selectedSeason}
                    setSelectedSeason={setSelectedSeason}
                    fits={fits}
                    selectedFit={selectedFit}
                    setSelectedFit={setSelectedFit}
                />
                {filteredItems.length > 0 ? (
                    <div className={s.grid}>
                        {filteredItems.map(item => (
                            <Card key={item.id} {...item} />
                        ))}
                    </div>
                ) : (
                    <div className={s.emptyState}>Ничего не найдено</div>
                )}
            </div>
        </div>
    );
});

export default Wardrobe;
