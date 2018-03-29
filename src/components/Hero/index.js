import { h } from "preact"
import { videowebm, videomp4 } from "../../assets"
import { LanguageHero } from "../language"
import LanguageToggler from "../LangButton"
import { DividerArrow } from "../Divider"
import style from "./hero.css"

const Home = ({ lang, onClick }) => {
  const { cta, description } = LanguageHero[lang]
  return (
    <section class={style.hero}>
      <LanguageToggler onClick={onClick} lang={lang} />
      <video autoPlay="true" loop>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </video>

      <div class={style.container}>
        <h1 class={style.name}>{cta}</h1>

        <p class={style.description}>{description}</p>

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
      <DividerArrow />
    </section>
  )
}

export default Home
