import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ lang, meta, name, title, aboutMeIntro }) {

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={name}
            titleTemplate={`%s | ${title}`}
            meta={[
                {
                    name: `description`,
                    content: aboutMeIntro,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: aboutMeIntro,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: title,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: aboutMeIntro,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO