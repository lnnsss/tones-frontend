import React, { useEffect, useRef } from 'react';
import s from "./styles.module.css";
import { useStores } from '../../stores/root-store-context';
import Carousel from "./components/Carousel.tsx";
import MyWardrobe from "./components/MyWardrobe.tsx";

const slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const Main = () => {
    const {
        header: { setTransparentHeader }
    } = useStores();

    const bgRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const rect = bgRef.current.getBoundingClientRect();
            if (rect.bottom <= 60) {
                setTransparentHeader(false);
            } else {
                setTransparentHeader(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setTransparentHeader(false);
        };
    }, []);

    return (
        <div className={s.main}>
            <div className={`${s.main__container}`}>
                <div className={s.bg} ref={bgRef}>
                    <h1>Одевайся в Тона</h1>
                </div>
                <Carousel slides={slides} options={{ loop: true }} />
                <MyWardrobe/>
            </div>
        </div>
    );
};

export default Main;