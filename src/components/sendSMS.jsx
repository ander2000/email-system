import React, { useContext, useEffect } from 'react'
import { ContextApp } from '../context/context'
import { useForm } from 'react-hook-form';

export default function SendSMS() {

    const APP_KEY_EMAIL = process.env.REACT_APP_API_PORTAFOLIO;

    //console.log(APP_KEY_EMAIL);

    const { version } = useContext(ContextApp);

    const { register, handleSubmit } = useForm();

    const startEnvioSMS = (datos) => {
        console.log(datos);
        const { telefono, mensaje } = datos;

        if (!telefono || !mensaje) {
            window.alert("Campos incompletos");
            return;
        }       

        envioSMS(telefono, mensaje);
    }

    const envioSMS = async (telefono, mensaje) => {


        const options = {
            // Parametros para enviar peticion al endpoint
            method: 'POST', // Tipo de petición
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "x-access-token": APP_KEY_EMAIL
            },
            body: JSON.stringify({
                "body": mensaje,
                "from": "+12076302367",
                "to": `+57${telefono}`
            }),
        };


        fetch(`https://api-email-system.vercel.app/sms/sendsms`, options)
            .then((data) => { 
                //console.log(data);
                window.alert("SMS enviado");
            })
            .catch((err) => { 
                console.error(err);
                window.alert("No se pudo enviar el SMS");
            });

    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>
                sendSMS
            </h1>
            <h2>
                Version system {version}
            </h2>

            <form action="" onSubmit={handleSubmit(startEnvioSMS)}>
                <label htmlFor="mensaje">Mensaje</label>
                <input type="text" id='mensaje' {...register("mensaje")} />

                <br />

                <label htmlFor="telefono">Telefono</label>
                <input type='number' id="telefono" {...register("telefono")} />

                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}