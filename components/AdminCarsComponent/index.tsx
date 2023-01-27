import React, {FormEvent, useContext, useEffect, useState} from "react";
import styles from "./AdminCarsComponent.module.scss";
import LoadingComponent from "../LoadingComponent";
import {ButtonComponent, InputComponent} from "../../.yalc/autobahn-ui";
import {AppContext} from "../../contexts/AppContext";
import {useRouter} from "next/router";
import Image from "next/image";
import ModalComponent from "../ModalComponent";

type CarProps = {
    id: number,
    image: string,
    name: string,
    price: number,
}

const AdminCarsComponent:React.FC = () => {
    const {apiUrl, user} = useContext(AppContext)
    const [cars, setCars] = useState<Array<CarProps>>([])
    const [carsLoading, setCarsLoading] = useState<boolean>(true)
    const [deletionLoading, setDeletionLoading] = useState<boolean>(false)
    const [addLoading, setAddLoading] = useState<boolean>(false)
    const [nameError, setNameError] = useState<string>('')
    const [priceError, setPriceError] = useState<string>('')
    const [imageError, setImageError] = useState<string>('')
    const [addError, setAddError] = useState<string>('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        if (typeof user !== 'undefined')  {
            fetch(`${apiUrl}/.car/cars`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`}
            }).then(r => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error('Erreur')
            }).then((payload: {cars: Array<CarProps>}) => {
                setCars(payload.cars)
                setCarsLoading(false)
            }).catch(e => {
                setCarsLoading(false)
                console.log(e)
                void router.push('/')
            })
        }
    }, [])

    const deleteCar = (id: number, index: number) => {
        setDeletionLoading(true)
        fetch(`${apiUrl}/.car/delete/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`}
        }).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Erreur')
        }).then(() => {
            const updatedCars = [...cars]
            updatedCars.splice(index, 1);
            setCars(updatedCars)
            setDeletionLoading(false)
        }).catch(e => {
            setDeletionLoading(false)
            setAddError(e.message)
        })
    }

    const handleAdd = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formError:boolean = false
        setAddError('')
        setNameError('')
        setPriceError('')
        setImageError('')

        // @ts-ignore
        const formData = new FormData(e.target)

        if (!formData.get('name')) {
            setNameError('Veuillez entrer un nom de véhicule.')
            formError = true
        }
        if (!formData.get('price')) {
            setPriceError('Veuillez entrer un prix de location.')
            formError = true
        }
        if (!formData.get('image')) {
            setImageError('Veuillez indiqué l\'url de l\'image du véhicule.')
            formError = true
        }
        if (formError) {
            return
        }

        addCar(formData)
    }

    const addCar = (data: FormData) => {
        setAddLoading(true)
        const body = {
            "name": data.get('name'),
            "price": data.get('price'),
            "image": data.get('image'),
        }
        fetch(`${apiUrl}/.car/create`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`}
        }).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error('Erreur')
        }).then((car: CarProps) => {
            const updatedCars = [...cars]
            updatedCars.push(car)
            setCars(updatedCars)
            setAddLoading(false)
            setModalVisible(false)
        }).catch(e => {
            setAddLoading(false)
            console.log(e)
        })
    }

    return (
        <div className={styles.tabContainer}>
            {modalVisible &&
                <ModalComponent title="Ajouter une voiture" onClose={() => setModalVisible(false)}>
                    <form onSubmit={e => handleAdd(e)}>

                        <div className={styles.inputContainer}>
                            <InputComponent type="text" name="name" label="Nom" />
                            {nameError && <p className={styles.error}>{nameError}</p>}
                        </div>

                        <div className={styles.inputContainer}>
                            <InputComponent type="number" name="price" label="Prix" />
                            {priceError && <p className={styles.error}>{priceError}</p>}
                        </div>

                        <div className={styles.inputContainer}>
                            <InputComponent type="text" name="image" label="Url de l'image" />
                            {imageError && <p className={styles.error}>{imageError}</p>}
                        </div>

                        <ButtonComponent loading={addLoading} className={styles.submitBtn}>Ajouter</ButtonComponent>
                        {addError && <p className={styles.error}>{addError}</p>}
                    </form>
                </ModalComponent>
            }
            <ButtonComponent
                className={styles.addBtn}
                onClick={() => setModalVisible(true)}>
                Ajouter une voiture
            </ButtonComponent>
            <div className={`${styles.tableContainer}`}>
                {carsLoading ?
                    <LoadingComponent title="Chargement des données.." />
                    :
                    <table className={`${styles.table}`}>
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom et prix</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cars.length ?
                            cars.map((car, index) =>
                                <tr key={car.id}>
                                    <td>
                                        <img className={styles.image} src={car.image} alt={`${car.name} photo`} />
                                    </td>
                                    <td className={styles.name}>
                                        {car.name}<br/>
                                        {car.price}€
                                    </td>
                                    <td>
                                        <ButtonComponent
                                            loading={deletionLoading}
                                            className={styles.deleteBtn}
                                            onClick={() => deleteCar(car.id, index)}>
                                            Supprimer
                                        </ButtonComponent>
                                    </td>
                                </tr>
                            )
                            :
                            <tr>
                                <td className={styles.emptyMessage} colSpan={3}>Il n'y a pas de voitures pour le moment</td>
                            </tr>
                        }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default AdminCarsComponent