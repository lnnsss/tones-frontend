import React from 'react';
import s from "../styles.module.css";

interface CardProps {
    id: number,
    images: string[],
    title: string,
    brand: string,
    color: string,
    season: string,
    fit: string,
    subcategory: string
}

const Card: React.FC<CardProps> = ( {id, images, title, brand, color, season, fit, subcategory}  ) => {
    return (
        <div className={s.card}>
            <div className={s.imageWrapper}>
                <img
                    src={images[0]}
                    alt={title}
                    className={`${s.mainImage} ${images.length > 1 ? s.hasHover : ""}`}
                    onMouseOver={e => {
                        if (images.length > 1) e.currentTarget.src = images[1];
                    }}
                    onMouseOut={e => {
                        if (images.length > 1) e.currentTarget.src = images[0];
                    }}
                />
            </div>
            <div className={s.info}>
                <p className={s.title}>{title}</p>
                <p className={s.brand}>{brand}</p>
                <div className={s.tags}>
                    {[color, season, fit, subcategory]
                        .filter(Boolean)
                        .map((text, idx) => (
                            <span key={idx} className={s.tag}>{text}</span>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Card;