import React from "react";
import { observer } from "mobx-react-lite";
import {useStores} from "../stores/root-store-context.ts";
import Modal from "./UI/Modal";
import AddItemModal from "./Wardrobe/components/AddItemModal.tsx";

const Modals: React.FC = observer(() => {
    const { modal: { isAddItemModalActive } } = useStores();

    return (
        <Modal>
            {isAddItemModalActive && <AddItemModal />}
        </Modal>
    )
})

export default Modals