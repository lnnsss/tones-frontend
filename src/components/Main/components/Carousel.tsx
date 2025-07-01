import React from 'react';
import s from "../styles.module.css"
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
    slides: React.ReactNode[];
    options?: Parameters<typeof useEmblaCarousel>[0];
}

const Carousel: React.FC<CarouselProps> = ({slides, options}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, ...options });

    return (
        <div className={s.carousel} ref={emblaRef}>
            <div className={s.carousel__container}>
                {slides.map((slide, i) => (
                    <div className={s.slide} key={i}>
                        <img src={`/images/cards/${slide}`} alt={slide} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;