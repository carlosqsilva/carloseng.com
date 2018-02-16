import { h, render, Component } from "preact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import "normalize.css"

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById("loader")
    if (ele) {
      setTimeout(() => {
        ele.classList.add("ready")
        setTimeout(() => {
          ele.outerHTML = ""
        }, 800)
      }, 500)
    }
  }

  render() {
    return (
      <div>
        <Home />
        <Projects />
      </div>
    )
  }
}

render(<App />, document.body)
