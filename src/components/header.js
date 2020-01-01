import React from "react"
import { Helmet } from "react-helmet"
import "../scss/main.scss"
import MainNavigation from "./main-navigation"

export default () => (
    <div className="pure-g">
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
        </Helmet>
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="main-title">J. de Freitas</h1>
                <h2 className="main-tagline">Software Developer</h2>
                <p>I am a Full-Stack Developer and Systems Analyst with more than 7 years of experience in delivering systems, projects, APIs and websites.</p>

                <MainNavigation />

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="pure-button" href="http://purecss.io">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="pure-button" href="http://yuilibrary.com">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="pure-button" href="http://purecss.io">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="pure-button" href="http://yuilibrary.com">Freitas.Eye</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
)