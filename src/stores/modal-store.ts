import { makeAutoObservable } from "mobx";

class ModalStore {
    isModalActive: boolean = false;
    isAddItemModalActive: boolean = false; // Добавление вещи

    constructor() {
        makeAutoObservable(this)
    }

    // Закрыть модальное окно
    closeModals = (): void => {
        this.isModalActive = false
        this.isAddItemModalActive = false
    }

    // Открыть модальное окно добавления вещи
    setAddItemModalActive = (): void => {
        this.isModalActive = true
        this.isAddItemModalActive = true
    }
}

export default new ModalStore()