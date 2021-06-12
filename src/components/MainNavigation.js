import React from "react"

const MainNavigation = ({ socialMedia }) => (
  <nav className="nav pure-u-1">
    <ul className="nav-list">
      {socialMedia.map((item, index) => {
        const { name, icoClass, url } = item;

        return (
          <li key={index} className="nav-item">
            <a
              href={url}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className={`${icoClass} ico`}
            >
              <span>{name}</span>
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default MainNavigation
