import { makeAutoObservable } from "mobx";

class ProfileStore {
    id: string = "";
    name: string = "";
    surname: string = "";
    sex: string = "";
    birthdate: string = "";
    avatarURL: string = "";

    constructor() {
        makeAutoObservable(this)
    }

    setId = (newId: string): void => {
        this.id = newId
    }
    setName = (newName: string): void => {
        this.name = newName
    }
    setSurname = (newSurname: string): void => {
        this.surname = newSurname
    }
    setSex = (newSex: string): void => {
        this.sex = newSex
    }
    setBirthdate = (newBirthdate: string): void => {
        this.birthdate = newBirthdate
    }
    setAvatarURL = (newAvatarURL: string): void => {
        this.avatarURL = newAvatarURL
    }

    clear = () => {
        this.name = ""
        this.surname = ""
        this.sex = ""
        this.birthdate = ""
        this.avatarURL = ""
    }
}

export default new ProfileStore()