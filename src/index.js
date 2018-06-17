import { h, render, Component } from "preact"
import { ThemeProvider } from "styled-components"
import Home from "@/Hero"
import Projects from "@/Projects"
import Footer from "@/Footer"
import Toggler from "@/LangToggler"

const theme = {
  link: "#097cf3",
  info: "#ebca7d",
  black: "#121212",
  dark: "#212121",
  red: "#f44336",
  light: "#fafafa",
  grey: "#eeeeee",
  white: "#ffffff"
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

if (!PRODUCTION) {
  require("preact/devtools")
} else {
  console.log("%c Oi, tudo bem?", "color: red; font-size: 20px;")
}
