import React from "react";
import { observer } from "mobx-react-lite";
import {useStores} from "../stores/root-store-context.ts";
import Modal from "./UI/Modal";
import ErrorModal from "./UI/Modal/components/ErrorModal.tsx";
import AddItemModal from "./Wardrobe/components/AddItemModal.tsx";

const Modals: React.FC = observer(() => {
    const { modal: { isErrorModalActive, isAddItemModalActive } } = useStores();

    return (
        <Modal>
            {isErrorModalActive && <ErrorModal />}
            {isAddItemModalActive && <AddItemModal />}
        </Modal>
    )
})

export default Modals