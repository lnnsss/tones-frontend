import React from "react";
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.ts";

interface Props {
    children: React.ReactNode;
}

const Modal: React.FC<Props> = observer(({ children }) => {
    const { modal: { closeModals } } = useStores();

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={s.background} onClick={closeModals}>
            <div className={s.container} onClick={handleContainerClick}>
                {children}
            </div>
        </div>
    );
});

export default Modal;