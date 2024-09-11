import React, { useState } from 'react'
import { useContext } from 'react';
import { ContextApp } from '../context/context';


export default function Home() {
    // const [numSuma, setNumSuma] = useState(1);

    const {version, setVersion} = useContext(ContextApp);

    // const sumar = () => {
    //     setNumSuma(numSuma + 1);
    // }

    // const restar = () => {
    //     numSuma > 0 && setNumSuma(numSuma - 1);
    // }

    // const modificarVersion = () => {
    //     setVersion(Math.floor(Math.random() * 100));
    // };

    return (
        <div>
            <h2>
                Version {version}
            </h2>
            <h2>
                HELLO WORLD     
            </h2>
        </div>
    )
}