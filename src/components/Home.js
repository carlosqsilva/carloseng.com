import { h } from "preact"
import { videowebm, videomp4 } from "../assets"
import style from "./home.css"

const Home = () => {
  return (
    <section class={style.intro}>
      <video autoPlay="true" loop>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </video>

      <div class={style.container}>
        <h1 class={style.name}>CARLOS SILVA</h1>

        <p class={style.description}>
          I'm 24 years old, from Brazil. I have a bachelor degree in Production
          Engineering and getting a major in software engineering.
        </p>

        <div class={style.social}>
          <a
            href="https://github.com/carlosqsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/carlosqsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="mailto:carlosqsilva@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
