import React from "react"

export default () => {
    const year = new Date().getFullYear();

    return (
        <footer className="container pure-g">
            <div className="pure-u-1 pure-u-md-1-2 credits">
                <p>jfreitas.dev {year} &bull; Handcrafted by me</p>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 code-source">
                <p><a href="https://github.com/juniormfreitas/jfreitas.dev" target="_blank" rel="noopener noreferrer">How I built this website</a></p>
            </div>
        </footer>
    )
}

