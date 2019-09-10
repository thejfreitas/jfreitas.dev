import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/portifolio">
                <li>Portifolio</li>
            </Link>
            <Link to="/blog">
                <li>Blog</li>
            </Link>
        </ul>
    </nav>
)