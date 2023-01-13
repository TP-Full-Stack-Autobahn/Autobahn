import {NextPage} from "next";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "../../styles/pages/admin.module.scss";
import FooterComponent from "../../components/FooterComponent";
import {ButtonComponent} from "autobahn-ui";
import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../contexts/AppContext";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";

type RegisteredUserProps = {
    id: number,
    email: number,
    lastname: string,
    firstname: string,
    phone: string,
    nationality: string,
    validated: boolean
}

const Admin:NextPage = () => {
    const {apiUrl, user} = useContext(AppContext)
    const [registeredUsers, setRegisteredUsers] = useState<Array<RegisteredUserProps>>([])
    const [userLoading, setUserLoading] = useState<boolean>(true)
    const [verifyLoading, setVerifyLoading] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        if (typeof user !== 'undefined')  {
            fetch(`${apiUrl}/.user/future-users`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`}
            }).then(r => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error('Erreur')
            }).then((payload: {users: Array<RegisteredUserProps>}) => {
                setRegisteredUsers(payload.users)
                setUserLoading(false)
            }).catch(e => {
                setUserLoading(false)
                console.log(e)
                void router.push('/')
            })
        }
    }, [user])

    const handleValidation = (id: number, index: number) => {
        setVerifyLoading(true)
        fetch(`${apiUrl}/.user/valid-user/${id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`}
        }).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Erreur')
        }).then(() => {
            const updatedUsers = [...registeredUsers]
            updatedUsers[index].validated = true
            setRegisteredUsers(updatedUsers)
            setVerifyLoading(false)
        }).catch(e => {
            setVerifyLoading(false)
            console.log(e)
        })
    }

    useEffect(() => {
        if(user === null) {
            void router.push('/')
        }
    }, [user])

    if(typeof user === "undefined" || user === null || user?.isAdmin === false) {
        return <LoadingComponent title="Authentification en cours.." />
    }

    return (
        <>
            <HeaderComponent />

            <section className={`${styles.adminContainer}`}>
                <p className='page-title'>Gestion back-office</p>
                <ul className={`${styles.tabList}`}>
                    <a className={`${styles.selected}`}><li>Liste des utilisateur inscrits</li></a>
                    <a><li>Liste des véhicules (WIP...)</li></a>
                </ul>
                <div className={`${styles.tableContainer}`}>
                    {userLoading ?
                        <LoadingComponent title="Chargement des données.." />
                        :
                        <table className={`${styles.table}`}>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Nom / Prénom</th>
                                    <th>Coordonnées</th>
                                    <th>Nationalité</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {registeredUsers.map((registeredUser, index) =>
                                <tr key={registeredUser.id}>
                                    <td className={`${styles.status}`}>
                                        {registeredUser.validated ?
                                            <span>✅ Vérifier</span>
                                            :
                                            <span>⚠️ En attente</span>
                                        }
                                    </td>
                                    <td>
                                        {registeredUser.lastname}<br/>
                                        {registeredUser.firstname}
                                    </td>
                                    <td>
                                        {registeredUser.email}<br/>
                                        {registeredUser.phone}
                                    </td>
                                    <td>{registeredUser.nationality}</td>
                                    <td>
                                        {registeredUser.validated ?
                                            <ButtonComponent className={styles.editBtn}>Editer</ButtonComponent>
                                            :
                                            <ButtonComponent
                                                loading={verifyLoading}
                                                onClick={() => handleValidation(registeredUser.id, index)}>
                                                Verifier
                                            </ButtonComponent>
                                        }
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    }
                </div>
            </section>

            <FooterComponent />
        </>
  )
}


export default Admin
