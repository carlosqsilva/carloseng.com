import { h } from "preact"
import { LanguageProject } from "../language"
import style from "./style.css"
import Featured from "../ProjectFeatured"
import Other from "../ProjectCard"
import { DividerArrow } from "../Divider"

const Projects = ({ lang }) => {
  const { last, other } = LanguageProject[lang]
  return (
    <section class={style.project}>
      <Featured project={last} lang={lang} />
      <Other projects={other} lang={lang} />
      <DividerArrow />
    </section>
  )
}

export default Projects
