import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link to={"/"}>Home</Link></li>
                <li><Link to={"/sendemail"}>SendEmail</Link></li>
                <li><Link to={"/sendsms"}>SendSMS</Link></li>
            </ul>
        </nav >
    )
}
