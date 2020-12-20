import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
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
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
            </Helmet>
            <header className="container pure-g">
                <MainNavigation socialMedia={headerData.site.siteMetadata.socialMedia} />
            </header>
        </React.Fragment>
    )
}