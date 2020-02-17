import React from "react"
import { Helmet } from "react-helmet"
import "../scss/main.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import MainNavigation from "../components/main-navigation"

export default () => {

    const headerData = useStaticQuery(
        graphql`
        query MainHeader {
            site {
                siteMetadata {
                    name {
                        middle
                        last
                    }
                    socialMedia {
                        name
                        url
                        icoClass
                    }
                }
            }    
        }`
    )

    return (
        <React.Fragment>
            <div className="container pure-g main-header">
                <Helmet>
                    <html lang="en" />
                    <meta charSet="utf-8" />
                </Helmet>

                <div className="pure-u-1-2">
                    <Link to="/" className="main-headline">{headerData.site.siteMetadata.name[0].last}</Link>
                </div>
                <div className="pure-u-1-2 header-navigation-area">
                    <MainNavigation socialMedia={headerData.site.siteMetadata.socialMedia} />
                </div>
            </div>
        </React.Fragment>
    )
}