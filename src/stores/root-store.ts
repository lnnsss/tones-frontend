import headerStore from "./header-store";
import tokenStore from "./token-store.ts";
import wardrobeStore from "./wardrobe-store.ts";

class RootStore {
    header = headerStore;
    wardrobe = wardrobeStore;
    token = tokenStore;
}

export default RootStore;