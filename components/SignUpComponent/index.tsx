import React, {FormEvent, useReducer, useState} from "react";
import styles from "./SignUpComponent.module.scss";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "autobahn-ui";
import errorReducer, {errorsReducerDefault} from "./errorReducer";

type SignUpProps = {
    onSubmit: () => void
}

const SignUpComponent:React.FC<SignUpProps> = (props) => {
    const {onSubmit} = props

    const [state, dispatch] = useReducer(errorReducer, errorsReducerDefault)

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formError:boolean = false
        dispatch("cleanError")

        // @ts-ignore
        const formData = new FormData(e.target)

        if (!formData.get('client')) {
            dispatch("setClientError")
            formError = true
        }
        if (!formData.get('lastname')) {
            dispatch("setLastnameError")
            formError = true
        }
        if (!formData.get('firstname')) {
            dispatch("setFirstnameError")
            formError = true
        }
        if (!formData.get('email')) {
            dispatch("setEmailError")
            formError = true
        }
        if (!formData.get('phone')) {
            dispatch("setPhoneError")
            formError = true
        }
        if (formData.get('nationality') === 'none') {
            dispatch("setNationalityError")
            formError = true
        }
        if (!formData.get('validate')) {
            dispatch("setValidateError")
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
                {state.clientError && <p className={styles.error}>{state.clientError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="text" name="lastname" label="Nom" />
                {state.lastnameError && <p className={styles.error}>{state.lastnameError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="text" name="firstname" label="Prénom" />
                {state.firstnameError && <p className={styles.error}>{state.firstnameError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="email" name="email" label="Email" />
                {state.emailError && <p className={styles.error}>{state.emailError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <InputComponent type="number" name="phone" label="Téléphone" />
                {state.phoneError && <p className={styles.error}>{state.phoneError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <SelectComponent
                    name="nationality"
                    label="Nationalité"
                    options={{"none": "Séléctionner une nationalité", "french": "Française", "english": "Anglaise"}}
                />
                {state.nationalityError && <p className={styles.error}>{state.nationalityError}</p>}
            </div>

            <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                <CheckboxComponent label="J'atteste que je possède un permis de conduire valide." name="validate" value="validate" />
                {state.validateError && <p className={styles.error}>{state.validateError}</p>}
            </div>

            <ButtonComponent className={styles.submitBtn}>Demander mon inscription</ButtonComponent>
        </form>
    )
}

export default SignUpComponent