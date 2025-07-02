import headerStore from "./header-store";
import tokenStore from "./token-store.ts";
import wardrobeStore from "./wardrobe-store.ts";
import modalStore from "./modal-store.ts";

class RootStore {
    header = headerStore;
    wardrobe = wardrobeStore;
    modal = modalStore;
    token = tokenStore;
}

export default RootStore;