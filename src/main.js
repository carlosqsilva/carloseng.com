import { h, render, Component } from "preact"
import { ThemeProvider } from "styled-components"
import Home from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer/footer"
import Toggler from "./components/LangToggler"

const theme = {
  link: "#097cf3",
  info: "#ebca7d",
  black: "#111",
  dark: "#212121",
  red: "#f44336",
  light: "#fafafa",
  grey: "#eeeeee"
}

class App extends Component {
  state = {
    language: "en"
  }

  onclick = () => {
    this.setState(prevState => ({
      language: prevState.language === "en" ? "pt" : "en"
    }))
  }

  render(_, { language }) {
    return (
      <ThemeProvider theme={theme}>
        <main style={{ overflowX: "hidden" }}>
          <Toggler lang={language} onClick={this.onclick} />
          <Home lang={language} />
          <Projects lang={language} />
          <Footer lang={language} />
        </main>
      </ThemeProvider>
    )
  }
}

render(<App />, document.body)

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
} else {
  console.log("%c Oi, tudo bem?", "color: red; font-size: 20px;")
}
