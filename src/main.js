import { h, render, Component } from "preact"
import "normalize.css"
import "./main.css"
import Home from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer/footer"

class App extends Component {
  state = {
    language: "en"
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      const ele = document.getElementById("loader")
      if (ele) {
        setTimeout(() => {
          ele.classList.add("ready")
          setTimeout(() => {
            ele.outerHTML = ""
          }, 500)
        }, 500)
      }
    })
  }

  onclick = () => {
    this.setState(prevState => ({
      language: prevState.language === "en" ? "pt" : "en"
    }))
  }

  render(_, { language }) {
    return (
      <main style={{ overflow: "hidden" }}>
        <Home lang={language} onClick={this.onclick} />
        <Projects lang={language} />
        <Footer lang={language} />
      </main>
    )
  }
}

render(<App />, document.body)

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
  require("preact/devtools")
}
