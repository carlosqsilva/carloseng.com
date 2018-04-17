import { h } from "preact"
import { Link } from "../Miscellaneous/link"
import st from "./style.css"

const Card = ({ link, name, description, tech }) => (
  <Link class={st.card} href={link}>
    <h3 class={st.title}>{name}</h3>
    {tech &&
      tech.map((t, i) => (
        <span class={st.tech} key={i}>
          {t}
        </span>
      ))}
    <p class={st.description}>{description}</p>
  </Link>
)

const Other = ({ projects, lang }) => (
  <div class={st.wrapper}>
    <h3 class={st.section}>{lang ? "Other Projects" : "Outros Projetos"}</h3>
    <div class={st.card_container}>
      {projects.map((project, i) => <Card {...project} key={i} />)}
    </div>
  </div>
)

export default Other
