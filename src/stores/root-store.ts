import headerStore from "./header-store";
import tokenStore from "./token-store.ts";

class RootStore {
    header = headerStore;
    token = tokenStore
}

export default RootStore;