import React, { useContext, useEffect } from 'react'
import { ContextApp } from '../context/context'
import { useForm } from 'react-hook-form';

export default function SendEmail() {

    const APP_KEY_EMAIL = process.env.REACT_APP_API_PORTAFOLIO;

    //console.log(APP_KEY_EMAIL);

    const { version } = useContext(ContextApp);

    const { register, handleSubmit } = useForm();

    const startEnvioEmails = (datos) => {
        console.log(datos);
        const { nameUser, email, mensaje } = datos;

        if (!nameUser || !email || !mensaje) {
            window.alert("Campos incompletos");
            return;
        }

        envioEmails(nameUser, email, mensaje);
    }

    const envioEmails = async (nameUser, email, mensaje) => {


        const options = {
            // Parametros para enviar peticion al endpoint
            method: 'POST', // Tipo de petición
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "x-access-token": APP_KEY_EMAIL
            },
            body: JSON.stringify({
                "from": "adlopez716@misena.edu.co",
                "to": email,
                "subject": `hello ${nameUser}`,
                "message": mensaje
            }),
        };


        fetch(`https://api-email-system.vercel.app/email/sendEmail`, options)
            .then((data) => { 
                //console.log(data);
                window.alert("Correo enviado");
            })
            .catch((err) => { 
                console.error(err);
                window.alert("No se pudo enviar el correo");
            });

    }

    useEffect(() => {

    }, [])

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

                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}