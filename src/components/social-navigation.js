import React from "react"

export default ({ socialMedia }) => {
    return (
        <nav className="nav" >
            <ul className="nav-list">
                {socialMedia.map((item, i) => {
                    return (
                        <li key={i} className="nav-item">
                            <a target="_blank" rel="noopener noreferrer" className="pure-button" href={item.url}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}