import React from "react";
import './HeaderComponent.module.scss'
import styles from "./HeaderComponent.module.scss";

const HeaderComponent:React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="logo-container">
                <img />
            </div>
            <h1>Autobahn</h1>
            {/* Composant quentin btn */}
        </header>
    )
}

export default HeaderComponent