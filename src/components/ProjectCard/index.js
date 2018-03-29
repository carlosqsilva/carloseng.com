import { h } from "preact"
import style from "./style.css"

const Card = ({ link, name, description, tech }) => (
  <a class={style.card} href={link} target="_blank" rel="noopener noreferrer">
    <h3 class={style.title}>{name}</h3>
    {tech &&
      tech.map((t, i) => (
        <span class={style.tech} key={i}>
          {t}
        </span>
      ))}
    <p class={style.description}>{description}</p>
  </a>
)

const Other = ({ projects }) => (
  <div class={style.wrapper}>
    <h3 class={style.section}>Other Projects</h3>
    <div class={style.card_container}>
      {projects.map((project, i) => <Card {...project} key={i} />)}
    </div>
  </div>
)

export default Other
