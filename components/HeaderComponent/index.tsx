import React from "react";
import Image from 'next/image'
import styles from "./HeaderComponent.module.scss";
import localFont from '@next/font/local'
import {ButtonComponent} from "autobahn-ui";
import Link from "next/link";

const bayon = localFont({ src: '../../styles/fonts/Bayon-Regular.ttf' })

const HeaderComponent:React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoContainer}>
                <Image src="/logo.svg" alt="Autobahn logo" width="42" height="42" />
                <h1 className={bayon.className}>Autobahn</h1>
            </Link>
            <Link href="signin">
                <ButtonComponent className={styles.btn}>
                    <Image src="/signin.svg" alt="Sign in" width="23" height="23" />
                </ButtonComponent>
            </Link>
        </header>
    )
}

export default HeaderComponent