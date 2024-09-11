import React, { useContext, useEffect } from 'react'
import { ContextApp } from '../context/context'
import { useForm } from 'react-hook-form';
import TemplateEmail from './TemplateEmail';
import { Resend } from 'resend';

export default function SendEmail() {

    const APP_KEY_EMAIL = process.env.REACT_APP_KEY_EMAIL;

    const { version } = useContext(ContextApp);

    const { register, handleSubmit } = useForm();

    const startEnvioEmails = (datos) => {
        console.log(datos);
        const { nameUser, email, phone, mensaje, numberMensajes } = datos;

        if (!nameUser || !email || !phone || !mensaje || !numberMensajes) {
            window.alert("Campos incompletos");
            return;
        }

        envioEmails()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    const envioEmails = async () => {
        const resend = new Resend(APP_KEY_EMAIL);

        await resend.emails.send({
            from: 'anderneitor2000@gmail.com',
            to: 'andermillanlopez@gmail.com',
            subject: 'hello world',
            react: <TemplateEmail name="Anderson" content="Hello world" emailAddress="andermillanlopez@gmail.com" phoneNumber="3043680610" />,
        });
    }

    useEffect(()=>{

    },[])


    // console.log(APP_KEY_EMAIL);


    return (
        <div>
            <h1>
                sendEmail
            </h1>
            <h2>
                Version system {version}
            </h2>

            <form action="" onSubmit={handleSubmit(startEnvioEmails)}>
                <label htmlFor="nameUser">Nombre</label>
                <input type="text" id='nameUser' {...register("nameUser")} />

                <br />

                <label htmlFor="email">Email</label>
                <input type='email' id="email" {...register("email")} />

                <br />

                <label htmlFor="phone">Numero de teléfono</label>
                <input type="number" id="phone" {...register("phone")} />

                <br />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" {...register("mensaje")}></textarea>

                <br />

                <label htmlFor="numberMensajes">Numero de mensajes</label>
                <input type="number" id='numberMensajes' {...register("numberMensajes")} />

                <br />

                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}