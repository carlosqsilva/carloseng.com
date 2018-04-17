import { h } from "preact"
import { videowebm, videomp4 } from "../../assets"
import { LanguageHero } from "../language"
import LanguageToggler from "../LangButton"
import { DividerArrow } from "../Divider"
import { Link } from "../Miscellaneous/link"
import st from "./style.css"

const Home = ({ lang, onClick }) => {
  const { cta, description } = LanguageHero[lang]
  return (
    <section class={st.hero}>
      <LanguageToggler onClick={onClick} lang={lang} />
      <video autoPlay="true" loop>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </video>

      <div class={st.container}>
        <h1 class={st.name}>{cta}</h1>

        <p class={st.description}>{description}</p>

        <div class={st.social}>
          <Link href="https://github.com/carlosqsilva">Github</Link>
          <Link href="https://www.linkedin.com/in/carlosqsilva">Linkedin</Link>
          <Link href="mailto:carlosqsilva@outlook.com">Email</Link>
        </div>
      </div>
      <DividerArrow />
    </section>
  )
}

export default Home
