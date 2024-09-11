import React, { createContext, useEffect, useState } from 'react'

export const ContextApp = createContext();

export default function Context({children}) {

    const [version, setVersion] = useState("1.0");

    const [textContext, setTest] = useState("");

    useEffect(()=>{
        setTest("CONTEXT");
        console.log(`HELLO ${textContext}`);

        return () =>{
            // window.alert("adios");
        }

    }, [textContext]);

    return (
        <ContextApp.Provider value={{version, setVersion}}>
            {children}
        </ContextApp.Provider>
    )
}