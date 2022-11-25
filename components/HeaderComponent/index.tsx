import React from "react";
import Image from 'next/image'
import styles from "./HeaderComponent.module.scss";
import localFont from '@next/font/local'

const bayon = localFont({ src: '../../styles/fonts/Bayon-Regular.ttf' })

const HeaderComponent:React.FC = () => {
    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/logo.svg" alt="me" width="42" height="42" />
            <h1 className={bayon.className}>Autobahn</h1>
        </header>
    )
}

export default HeaderComponent