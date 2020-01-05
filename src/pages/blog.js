import React from "react"
import Layout from "../templates/layout-wrap"

export default () => {
  return (
    <Layout>
      <div className="content pure-u-1 pure-u-md-3-4">

        {/* A wrapper for all the blog posts  */}
        <div className="posts">
          <h1 className="content-subhead">Pinned Post</h1>

          {/* A single blog post */}
          <section className="post">
            <header className="post-header">
              {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar" src="img/common/tilo-avatar.png" /> */}

              <h2 className="post-title">Pinned Post</h2>

              <p className="post-meta">
                By <a href="/" className="post-author">J. de Freitas</a> under
                <a className="post-category post-category-css" href="/">CSS</a>
                <a className="post-category post-category-html" href="/">HTML</a>
              </p>
            </header>

            <div className="post-description">
              <p>Pellentesque consequat justo eu lacus viverra, vitae varius tortor imperdiet. Quisque et ligula nunc. Aliquam viverra erat nulla, in porttitor elit consectetur nec. Morbi ultrices mauris at semper mattis. Nullam quis gravida ipsum. Integer finibus metus eu quam semper, ut molestie nunc pulvinar. Ut et urna condimentum, vehicula quam nec, finibus eros. Integer nec diam neque. Nullam tincidunt felis varius est tempor eleifend. Sed quis eleifend lacus, nec maximus leo. Vivamus porttitor sapien sit amet nunc suscipit, vel faucibus lectus blandit. Proin id eros velit. Maecenas rhoncus nisl urna, eget aliquet metus scelerisque sed. Integer at mattis velit. Suspendisse nec arcu a dolor fermentum accumsan.</p>
            </div>
          </section>
        </div>

        <div className="posts">
          <h1 className="content-subhead">Recent Posts</h1>

          <section className="post">
            <header className="post-header">

              <h2 className="post-title">Nullam fermentum rutrum quam</h2>

              <p className="post-meta">
                By <a href="/" className="post-author">J. de Freitas</a> under
                <a className="post-category post-category-php" href="/">PHP</a>
              </p>
            </header>

            <div className="post-description">
              <p>
                Nullam fermentum rutrum quam. Nam ultricies neque sed velit ornare, vitae tincidunt ligula consequat. Praesent eget massa in erat lobortis rutrum. Suspendisse lacinia diam eget est euismod, in finibus felis dignissim. Morbi sit amet nisl vel ipsum ultrices ornare. Nam eget mollis urna. Nulla varius metus et quam vulputate finibus. Quisque laoreet non diam quis lobortis.
              </p>
            </div>
          </section>

          <section className="post">
            <header className="post-header">

              <h2 className="post-title">Nullam fermentum rutrum quam</h2>

              <p className="post-meta">
                By <a href="/" className="post-author">J. de Freitas</a> under
                <a className="post-category post-category-php" href="/">PHP</a>
              </p>
            </header>

            <div className="post-description">
              <p>
                Nullam fermentum rutrum quam. Nam ultricies neque sed velit ornare, vitae tincidunt ligula consequat. Praesent eget massa in erat lobortis rutrum. Suspendisse lacinia diam eget est euismod, in finibus felis dignissim. Morbi sit amet nisl vel ipsum ultrices ornare. Nam eget mollis urna. Nulla varius metus et quam vulputate finibus. Quisque laoreet non diam quis lobortis.
              </p>
            </div>
          </section>

          <section className="post">
            <header className="post-header">

              <h2 className="post-title">Nullam fermentum rutrum quam</h2>

              <p className="post-meta">
                By <a href="/" className="post-author">J. de Freitas</a> under
                <a className="post-category post-category-php" href="/">PHP</a>
              </p>
            </header>

            <div className="post-description">
              <p>
                Nullam fermentum rutrum quam. Nam ultricies neque sed velit ornare, vitae tincidunt ligula consequat. Praesent eget massa in erat lobortis rutrum. Suspendisse lacinia diam eget est euismod, in finibus felis dignissim. Morbi sit amet nisl vel ipsum ultrices ornare. Nam eget mollis urna. Nulla varius metus et quam vulputate finibus. Quisque laoreet non diam quis lobortis.
              </p>
            </div>
          </section>

          <section className="post">
            <header className="post-header">

              <h2 className="post-title">Nullam fermentum rutrum quam</h2>

              <p className="post-meta">
                By <a href="/" className="post-author">J. de Freitas</a> under
                <a className="post-category post-category-php" href="/">PHP</a>
              </p>
            </header>

            <div className="post-description">
              <p>
                Nullam fermentum rutrum quam. Nam ultricies neque sed velit ornare, vitae tincidunt ligula consequat. Praesent eget massa in erat lobortis rutrum. Suspendisse lacinia diam eget est euismod, in finibus felis dignissim. Morbi sit amet nisl vel ipsum ultrices ornare. Nam eget mollis urna. Nulla varius metus et quam vulputate finibus. Quisque laoreet non diam quis lobortis.
              </p>
            </div>
          </section>

        </div>

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
