import { makeAutoObservable } from "mobx";

class ModalStore {
    isModalActive: boolean = false;
    isAddItemModalActive: boolean = false; // Добавление вещи
    isErrorModalActive: boolean = false; // Вывод ошибки
    errorMessage: string = ""; // Сообщение ошибки

    constructor() {
        makeAutoObservable(this)
    }

    // Закрыть модальное окно
    closeModals = (): void => {
        this.isModalActive = false
        this.isErrorModalActive = false
        this.isAddItemModalActive = false
    }

    // Открыть модальное окно вывода ошибки
    setErrorModalActive = (message: string): void => {
        this.isModalActive = true;
        this.isErrorModalActive = true;
        this.errorMessage = message;
    };

    // Открыть модальное окно добавления вещи
    setAddItemModalActive = (): void => {
        this.isModalActive = true
        this.isAddItemModalActive = true
    }
}

export default new ModalStore()