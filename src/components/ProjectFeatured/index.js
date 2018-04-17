import { h } from "preact"
import { Link } from "../Miscellaneous/link"
import st from "./style.css"

const Featured = ({ project, lang }) => (
  <div class={st.container}>
    <div class={st.left}>
      <h3 class={st.section}>{lang ? "Recent Project" : "Último Projeto"}</h3>
      <h1 class={st.title}>{project.name}</h1>
      <div>
        {project.tech.map((tech, i) => (
          <span class={st.tech} key={i}>
            {tech}
          </span>
        ))}
      </div>
      <p class={st.description}>{project.description}</p>
      <Link class={st.link} href={project.link}>
        {lang ? "Check it here" : "Acesse aqui"}
      </Link>
    </div>
    <Link class={st.right} href={project.link}>
      <img class={st.image} src={project.image} alt="" />
    </Link>
  </div>
)

export default Featured
