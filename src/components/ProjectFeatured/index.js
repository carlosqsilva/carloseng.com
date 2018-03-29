import { h } from "preact"
import style from "./style.css"

const Featured = ({ project, lang }) => {
  const isEng = lang === "en"
  return (
    <div class={style.container}>
      <div class={style.left}>
        <h3 class={style.section}>
          {isEng ? "Recent Project" : "Último Projeto"}
        </h3>
        <h1 class={style.title}>{project.name}</h1>
        <div>
          {project.tech.map((tech, i) => (
            <span class={style.tech} key={i}>
              {tech}
            </span>
          ))}
        </div>
        <p class={style.description}>{project.description}</p>
        <a
          class={style.link}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isEng ? "Check it here" : "Acesse aqui"}
        </a>
      </div>
      <a
        class={style.right}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class={style.image} src={project.image} alt="" />
      </a>
    </div>
  )
}

export default Featured
