import React from "react";
import styles from "./LoadingComponent.module.scss";
import Image from "next/image";

type LoadingComponentProps = {
    title: string
}
const LoadingComponent:React.FC<LoadingComponentProps> = (props) => {
    const {title} = props

    return (
        <section className={styles.container}>
            <h1>{title}</h1>
        </section>
    )
}

export default LoadingComponent