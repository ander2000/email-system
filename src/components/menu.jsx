import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link to={"/"}>Home</Link></li>
                <li><Link to={"/sendEmail"}>SendEmail</Link></li>
            </ul>
        </nav >
    )
}
