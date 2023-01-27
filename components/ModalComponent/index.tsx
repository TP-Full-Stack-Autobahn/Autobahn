import React from "react";
import styles from "./ModalComponent.module.scss";
import Image from "next/image";

type LoadingComponentProps = {
    title: string
    onClose: () => void,
    children: any
}
const ModalComponent:React.FC<LoadingComponentProps> = (props) => {
    const {title, onClose, children} = props

    return (
        <div>
            <div onClick={e => onClose()} className={`${styles.container}`} />
            <div className={styles.modal}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <p onClick={() => onClose()} className={styles.closeBtn}>X</p>
                </div>
                {children}
            </div>
        </div>

    )
}

export default ModalComponent