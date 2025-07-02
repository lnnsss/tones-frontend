import React, {useState} from 'react';
import s from "../styles.module.css";

const ImageUpload = () => {
    const [images, setImages] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages(files);
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);
    };

    return (
        <div className={s.imageUpload}>
            <label htmlFor="images">Изображения</label>
            <div className={s.customFileWrapper}>
                <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className={s.hiddenFileInput}
                />
                <button>
                    <label htmlFor="images" className={s.customFileBtn}>
                        Выбрать файлы
                    </label>
                </button>
            </div>
            <div className={s.previewGrid}>
                {previews.map((src, idx) => (
                    <img key={idx} src={src} alt={`preview-${idx}`} className={s.imagePreview}/>
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;