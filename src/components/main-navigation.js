import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="pure-button">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="pure-button">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/portifolio" className="pure-button">Portifolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="pure-button">Blog</Link>
            </li>
        </ul>
    </nav>
)