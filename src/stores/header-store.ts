import { makeAutoObservable } from "mobx";

class HeaderStore {
    isMenuOpen = false;
    isTransparent = false;

    constructor() {
        makeAutoObservable(this)
    }

    toggleMenu = (): void => {
        this.isMenuOpen = !this.isMenuOpen
    }

    setTransparentHeader = (state: boolean) => {
        this.isTransparent = state;
    };
}

export default new HeaderStore()