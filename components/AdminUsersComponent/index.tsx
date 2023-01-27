import React, {useContext, useEffect, useState} from "react";
import styles from "./AdminUsersComponent.module.scss";
import LoadingComponent from "../LoadingComponent";
import {ButtonComponent} from "../../.yalc/autobahn-ui";
import {AppContext} from "../../contexts/AppContext";
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
const AdminUsersComponent:React.FC = () => {
    const {apiUrl, user} = useContext(AppContext)
    const [registeredUsers, setRegisteredUsers] = useState<Array<RegisteredUserProps>>([])
    const [usersLoading, setUsersLoading] = useState<boolean>(true)
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
                setUsersLoading(false)
            }).catch(e => {
                setUsersLoading(false)
                console.log(e)
                void router.push('/')
            })
        }
    }, [])

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

    return (
        <div className={`${styles.tableContainer}`}>
            {usersLoading ?
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
                    {registeredUsers.length ?
                        registeredUsers.map((registeredUser, index) =>
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
                                    {!registeredUser.validated &&
                                        // <ButtonComponent className={styles.editBtn}>Editer</ButtonComponent>
                                        // :
                                        <ButtonComponent
                                            loading={verifyLoading}
                                            onClick={() => handleValidation(registeredUser.id, index)}>
                                            Verifier
                                        </ButtonComponent>
                                    }
                                </td>
                            </tr>
                        )
                        :
                        <tr>
                            <td className={styles.emptyMessage} colSpan={5}>Il n'y a pas d'utilisateurs pour le moment</td>
                        </tr>
                    }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default AdminUsersComponent