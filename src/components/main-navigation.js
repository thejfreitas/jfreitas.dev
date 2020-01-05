import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="pure-button">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="pure-button">Blog</Link>
            </li>
        </ul>
    </nav>
)