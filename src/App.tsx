import "nes.css/css/nes.min.css";
import "../public/assets/css/style.css"
import "./component/about"
import About from "./component/about";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <header>
        <div className="flex-header">
          <i className="snes-jp-logo brand-logo"></i>
          <h1>Sébastien Auberger</h1>
          <section className="media_list">
            <div className="margin-20"><a target="_blank" href="https://www.facebook.com/saubg7/"><i className="nes-icon facebook is-medium"></i></a></div>
            <div className="margin-20"><a target="_blank" href="https://www.instagram.com/s.auberger/"><i className="nes-icon instagram is-medium"></i></a></div>
            <div className="margin-20"><a target="_blank" href="https://github.com/SebastienAuberger"><i className="nes-icon github is-medium"></i></a></div>
            <div className="margin-20"><a target="_blank" href="https://www.linkedin.com/in/seb-abg/"><i className="nes-icon linkedin is-medium"></i></a></div>
        </section>
        </div>
        <p>Bienvenue cher ami !</p>
      </header>
      <About/>
      <Footer />
    </>
  )
}

export default App
