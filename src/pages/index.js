import React from "react"
import Layout from "../templates/layout-wrap"

export default () => {
  return (
    <Layout>
      <div className="content pure-u-1 pure-u-md-3-4">



        <div className="footer">
          <div className="pure-menu pure-menu-horizontal">
            <ul>
              <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
              <li className="pure-menu-item"><a href="http://twitter.com/yuilibrary/" className="pure-menu-link">Twitter</a></li>
              <li className="pure-menu-item"><a href="http://github.com/pure-css/pure/" className="pure-menu-link">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
