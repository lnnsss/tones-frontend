import headerStore from "./header-store";
import wardrobeStore from "./wardrobe-store.ts";
import profileStore from "./profile-store.ts";
import tokenStore from "./token-store.ts";
import modalStore from "./modal-store.ts";

class RootStore {
    header = headerStore;
    wardrobe = wardrobeStore;
    profile = profileStore;
    token = tokenStore;
    modal = modalStore;
}

export default RootStore;