import React, {FormEvent, useState} from "react";
import styles from "./SignUpComponent.module.scss";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "autobahn-ui";

type SignUpProps = {
    onSubmit: () => void
}

const SignUpComponent:React.FC<SignUpProps> = (props) => {
    const {onSubmit} = props

    const [clientError, setClientError] = useState<string>('')
    const [lastnameError, setLastnameError] = useState<string>('')
    const [firstnameError, setFirstnameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
    const [nationalityError, setNationalityError] = useState<string>('')
    const [validateError, setValidateError] = useState<string>('')

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formError:boolean = false
        setClientError('')
        setLastnameError('')
        setFirstnameError('')
        setEmailError('')
        setPhoneError('')
        setNationalityError('')
        setValidateError('')

        // @ts-ignore
        const formData = new FormData(e.target)

        if (!formData.get('client')) {
            setClientError('Veuillez séléctionner une option.')
            formError = true
        }
        if (!formData.get('lastname')) {
            setLastnameError('Veuillez indiquer votre nom.')
            formError = true
        }
        if (!formData.get('firstname')) {
            setFirstnameError('Veuillez indiquer votre prénom.')
            formError = true
        }
        if (!formData.get('email')) {
            setEmailError('Veuillez indiquer votre email.')
            formError = true
        }
        if (!formData.get('phone')) {
            setPhoneError('Veuillez indiquer votre téléphone.')
            formError = true
        }
        if (formData.get('nationality') === 'none') {
            setNationalityError('Veuillez indiquer votre nationalité.')
            formError = true
        }
        if (!formData.get('validate')) {
            setValidateError('Veuillez cocher cette option.')
            formError = true
        }

        if (formError) {
            return
        }

        onSubmit()
    }

    return (
        <form className={`container ${styles.signUpForm}`} onSubmit={e => handleSubmit(e)}>
            <h1 className={`title ${styles.fullWidth}`}>Inscription</h1>

            <p className={`${styles.title} ${styles.fullWidth}`}>Je suis :</p>

            <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                <div className={styles.radioContainer}>
                    <RadioComponent label="Une entreprise" value="company" name="client" />
                    <RadioComponent label="Un particulier" value="individual" name="client" />
                </div>
                {clientError && <p className={styles.error}>{clientError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="text" name="lastname" label="Nom" />
                {lastnameError && <p className={styles.error}>{lastnameError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="text" name="firstname" label="Prénom" />
                {firstnameError && <p className={styles.error}>{firstnameError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="email" name="email" label="Email" />
                {emailError && <p className={styles.error}>{emailError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="number" name="phone" label="Téléphone" />
                {phoneError && <p className={styles.error}>{phoneError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <SelectComponent
                    name="nationality"
                    label="Nationalité"
                    options={{"none": "Séléctionner une nationalité", "french": "Française", "english": "Anglaise"}}
                />
                {nationalityError && <p className={styles.error}>{nationalityError}</p>}
            </div>

            <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                <CheckboxComponent label="J'atteste que je possède un permis de conduire valide." name="validate" value="validate" />
                {validateError && <p className={styles.error}>{validateError}</p>}
            </div>

            <ButtonComponent className={styles.submitBtn}>Demander mon inscription</ButtonComponent>
        </form>
    )
}

export default SignUpComponent