import React from 'react';
import s from "../styles.module.css"
import {observer} from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.ts";
import {Link} from "react-router-dom";
import Card from "../../Wardrobe/components/Card.tsx";

const MyWardrobe = observer(() => {
    const {
        wardrobe: {items}
    } = useStores();

    return (
        <div className={s.wardrobe}>
            <header className={s.wardrobe__header}>
                <div className={`__container ${s.wardrobe__header__container}`}>
                    <h2 className={s.title}>Мой гардероб</h2>
                    <Link to="/wardrobe" className={s.arrowRight}>{`>`}</Link>
                </div>
            </header>
            <div className={s.wardrobe__cards}>
                <div className={`__container ${s.wardrobe__cards__container}`}>
                    {items.slice(0, 3).map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default MyWardrobe;