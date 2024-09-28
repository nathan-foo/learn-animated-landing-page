import styles from "./page.module.css";

export default function Home() {
  return (
    <body>
      <div className="container">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>
        <div className="loader-content">
          <div className="count"><p>0</p></div>
          <div className="copy"><p className="ml16"></p>New Reality</div>
        </div>
        <div className="loader-2"></div>
      </div>
      <div className="site-content">
        <nav>
          <div className="logo">
            <a href="#">New Reality</a>
          </div>
          <div className="links">
            <a href="#">Info</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="header">
          <h1>N</h1>
          <h1>e</h1>
          <h1>w</h1>
          <h1>r</h1>
          <h1>e</h1>
          <h1>a</h1>
          <h1>l</h1>
        </div>
          <footer>
            <div className="footer-copy">
              <p>
                New Reality is a design studio based in Tokyo, Japan. We work with many companies to build and proactively deliver engaging brand experiences. We are unique in our ability to take a strategic approach while being visually clean.
              </p>
            </div>
            <div className="footer-nav">
              <div className="img"></div>
              <div className="img"></div>
            </div>
          </footer>
      </div>
    </body>
  );
}
