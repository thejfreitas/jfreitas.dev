import React from "react"
import { Link } from "gatsby"
import Logo from "../img/freitas-logo-min.svg"

export default () => (
    <Link to="/" className="logo">
        <img className="logo" src={Logo} alt="J.Freitas.dev logo" />
    </Link>
)