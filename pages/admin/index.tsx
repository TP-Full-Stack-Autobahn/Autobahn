import {NextPage} from "next";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "../../styles/pages/admin.module.scss";
import FooterComponent from "../../components/FooterComponent";
import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../contexts/AppContext";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";
import AdminUsersComponent from "../../components/AdminUsersComponent";
import AdminCarsComponent from "../../components/AdminCarsComponent";

type TabProps = {
    view: any
    name: string
}

const Admin:NextPage = () => {
    const {user} = useContext(AppContext)
    const [tab, setTab] = useState({view: <AdminUsersComponent />, name: "Users"})
    const router = useRouter();

    useEffect(() => {
        if(user === null) {
            void router.push('/')
        }
    }, [user])

    if(typeof user === "undefined" || user === null || user?.isAdmin === false) {
        return <LoadingComponent title="Authentification en cours.." />
    }

    const changeTab = (tabName: string) => {
        switch (tabName) {
            case "Users":
                setTab({view: <AdminUsersComponent />, name: "Users"})
                break;
            case "Cars":
                setTab({view: <AdminCarsComponent />, name: "Cars"})
                break;
        }
    }

    return (
        <>
            <HeaderComponent />

            <section className={`${styles.adminContainer}`}>
                <p className='page-title'>Gestion back-office</p>
                <ul className={`${styles.tabList}`}>
                    <a
                        onClick={() => changeTab('Users')}
                        className={tab.name === 'Users' ? `${styles.selected}` : ''}>
                        <li>Liste des utilisateur inscrits</li>
                    </a>
                    <a
                        onClick={() => changeTab('Cars')}
                        className={tab.name === 'Cars' ? `${styles.selected}` : ''}>
                        <li>Liste des véhicules</li>
                    </a>
                </ul>
                {tab.view}
            </section>

            <FooterComponent />
        </>
  )
}


export default Admin
