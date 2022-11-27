import React from "react";
import styles from "./NavigateBackComponent.module.scss";
import {useRouter} from "next/router";

const NavigateBackComponent:React.FC = () => {
    const router = useRouter()

    return <p className={styles.navigateBack} onClick={() => router.back()}>← retour</p>
}

export default NavigateBackComponent