import React from "react"
import { Helmet } from "react-helmet"
import "../scss/main.scss"
import Logo from "./logo"
import MainNavigation from "./main-navigation"

export default () => (
    <div className="section is-paddingless-horizontal ">
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
        </Helmet>
        <div className="main-navigation container is-widescreen">
            <Logo />
            <MainNavigation />
        </div>
    </div>
)