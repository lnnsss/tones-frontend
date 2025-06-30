import React, { useEffect, useRef } from 'react';
import s from "./styles.module.css";
import { useStores } from '../../stores/root-store-context';

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
        handleScroll(); // initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setTransparentHeader(false); // reset on unmount
        };
    }, []);

    return (
        <div className={s.main}>
            <div className={`${s.main__container}`}>
                <div className={s.bg} ref={bgRef}>
                    <h1>Одевайся в Тона</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;