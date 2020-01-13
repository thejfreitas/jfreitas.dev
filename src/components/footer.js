import React from "react"

export default () => {
    const year = new Date().getFullYear();

    return (
        <footer className="container pure-g">
            <div className="pure-u-1-2">
                <p>jfreitas.dev {year} | Handcrafted by me</p>
            </div>
            <div className="pure-u-1-2">
                <p>How I built this website</p>
            </div>
        </footer>
    )
}

