import React from "react"

export default ({ socialMedia }) => {
    return (
        <nav className="nav" >

            <ul className="nav-list">
                {socialMedia.map((item, i) => {
                    return (
                        <li key={i} className="nav-item">
                            <a className="pure-button" href={item.url}>{item.name}</a>
                        </li>
                    )
                })}

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
        </nav >
    )
}