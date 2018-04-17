import { h } from "preact"
import { LanguageProject } from "../language"
import st from "./style.css"
import Featured from "../ProjectFeatured"
import Other from "../ProjectCard"
import { DividerArrow } from "../Divider"

const Projects = ({ lang }) => {
  const { last, other } = LanguageProject[lang]
  const is_eng = lang === "en"
  return (
    <section class={st.project}>
      <Featured project={last} lang={is_eng} />
      <Other projects={other} lang={is_eng} />
      <DividerArrow />
    </section>
  )
}

export default Projects
