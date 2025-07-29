import { makeAutoObservable } from "mobx";

class WardrobeStore {
    items = [
        {
            id: 1,
            title: "Тишка SM",
            color: "Белый",
            brand: "SALAD MARKET",
            category: "Футболки",
            subcategory: "Футболка",
            season: "Круглый год",
            fit: "Оверсайз",
            images: ["https://optim.tildacdn.com/tild3665-3435-4361-b663-353866623461/-/format/webp/SALAD_MARKET_SLAVE_T.png.webp"]
        },
        {
            id: 2,
            title: "Зипка SM",
            color: "Черный",
            brand: "SALAD MARKET",
            category: "Худи",
            subcategory: "Зип-худи",
            season: "Круглый год",
            fit: "Оверсайз",
            images: ["https://optim.tildacdn.com/tild3032-3639-4234-b632-356539363233/-/format/webp/pered_fix_1.png.webp", "https://optim.tildacdn.com/tild3831-3834-4464-a666-616538623063/-/format/webp/1111spina.png.webp"]
        },
        {
            id: 3,
            title: "Тишка BIIG",
            color: "Белый",
            brand: "CARNIVAL RECORDS",
            category: "Футболки",
            subcategory: "Футболка",
            season: "Круглый год",
            fit: "Оверсайз",
            images: ["https://static.insales-cdn.com/images/products/1/4225/1017032833/%D0%BA%D1%80-08.jpg", "https://static.insales-cdn.com/images/products/1/4224/1017032832/%D0%BA%D1%80-07.jpg"]
        },
        {
            id: 4,
            title: "Сумку OREO",
            color: "Белый",
            brand: "LA ROUTINE",
            category: "Аксессуары",
            subcategory: "Сумка",
            season: "Круглый год",
            fit: null,
            images: ["https://static.tildacdn.com/stor3736-3034-4866-a136-633231326563/34490488.jpg", "https://static.tildacdn.com/stor6661-3730-4437-a433-653366323663/18707500.jpg"],
        },
        {
            id: 5,
            title: "Шорты гугл",
            color: "Черный",
            brand: "LA ROUTINE",
            category: "Низ",
            subcategory: "Шорты",
            season: "Лето",
            fit: "Прямой",
            images: ["https://static.tildacdn.com/stor3035-3764-4464-b733-613365616233/39767659.png"]
        }
    ];

    constructor() {
        makeAutoObservable(this)
    }

    setItems = (newItems) => {
        this.items = newItems;
    };

    addItem = (newItem) => {
        const newId = this.items.length > 0 ? Math.max(...this.items.map(i => i.id)) + 1 : 1;
        this.items.push({ id: newId, ...newItem });
    };
}

export default new WardrobeStore()