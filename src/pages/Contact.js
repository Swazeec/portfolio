import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from "../components/UI/Section";
import useForm from '../hooks/useForm';

const {REACT_APP_EMAILJS_SERVICE, REACT_APP_EMAILJS_TEMPLATE, REACT_APP_EMAILJS_KEY} = process.env

const Contact = () =>{
    const form = useRef();
    const [error, setError] = useState(null)

    let formIsValid = false

    const {
        value:enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        onChangeHandler: nameInputChange,
        onBlurHandler: nameInputBlur,
        reset: nameReset
    } = useForm(value => /^[a-zA-Z ]+$/gm.test(value.trim()))

    const {
        value:enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        onChangeHandler: emailInputChange,
        onBlurHandler: emailInputBlur,
        reset: emailReset
    } = useForm(value => /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/g.test(value.trim()))

    const {
        value:enteredMessage,
        isValid: messageIsValid,
        hasError: messageHasError,
        onChangeHandler: messageInputChange,
        onBlurHandler: messageInputBlur,
        reset: messageReset
    } = useForm(value => value.length !== 0)

    if(nameIsValid && emailIsValid && messageIsValid){
        formIsValid=true
    }

    

    const sendEmail = (e) => {
        e.preventDefault();

        if(!formIsValid){
            setError('Merci de renseigner des informations valides')
            return
        }
        try {
            emailjs.sendForm(REACT_APP_EMAILJS_SERVICE,REACT_APP_EMAILJS_TEMPLATE , form.current, REACT_APP_EMAILJS_KEY)
            setError(true)
        } catch (Error) {
            setError('Une erreur est survenue, merci de réessayer plus tard !')
        };  
        
        nameReset()
        emailReset()
        messageReset()
    };

    return (
        <Section title='Contact'>
            {error && <div className='text-center text-danger'>{error}</div>}
            {error === true && <div className='text-center text-success'>Message envoyé avec succès !</div>}
            <form className='d-flex flex-column py-5 px-md-5' ref={form} onSubmit={sendEmail}>
                <div className='mb-4 mt-1 d-flex flex-column'>
                    <label>Nom</label>
                    <input type="text" name="user_name" value={enteredName} onChange={nameInputChange} onBlur={nameInputBlur} />
                    {nameHasError && <p className='text-danger fst-italic'> Merci d'entrer un nom valide</p>}
                </div>
                <div className='mb-4 mt-1 d-flex flex-column'>
                    <label>Email</label>
                    <input type="email" name="user_email" value={enteredEmail} onChange={emailInputChange} onBlur={emailInputBlur}/>
                    {emailHasError && <p className='text-danger fst-italic'> Merci d'entrer un email valide</p>}
                </div>
                <div className='mb-4 mt-1 d-flex flex-column'>
                    <label>Message</label>
                    <textarea name="message" value={enteredMessage} onChange={messageInputChange} onBlur={messageInputBlur}/>
                    {messageHasError && <p className='text-danger fst-italic'> Merci d'entrer un message valide</p>}
                </div>
                <input className='mb-4 mt-1' type="submit" value="Envoyer" disabled={!formIsValid}/>
            </form>
        </Section>
    )
}

export default Contact