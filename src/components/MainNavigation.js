import React from "react"

const MainNavigation = ({ socialMedia }) => (
    <nav className="nav pure-u-1">
        <ul className="nav-list">
            {socialMedia.map((item, i) => {
                return (
                    <li key={i} className="nav-item">
                        <a href={item.url} aria-label={item.name} target="_blank" rel="noopener noreferrer" className={item.icoClass + ` ico`}><span>{item.name}</span></a>
                    </li>
                )
            })}
        </ul>
    </nav>
)

export default MainNavigation;