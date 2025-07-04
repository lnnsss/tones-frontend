import React from 'react';
import s from "../styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../stores/root-store-context.ts";

const ErrorModal: React.FC = observer(() => {
    const {
        modal: { closeModals, errorMessage },
    } = useStores();

    return (
        <div className={s.modalBox}>
            <p className={s.modalMessage}>{errorMessage}</p>
            <button className={s.modalButton} onClick={closeModals}>
                OK
            </button>
        </div>
    );
});

export default ErrorModal;
