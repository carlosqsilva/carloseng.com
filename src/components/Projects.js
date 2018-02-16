import { h } from "preact"
import { screen1, screen2, screen3 } from "../assets"
import style from "./projects.css"

const projects = {
  last: [
    {
      name: "YASCC",
      description: "YASCC is a soundcloud music player",
      link: "https://carlosqsilva.github.io/YASCC/#/",
      tech: "React Redux React-Router",
      shot: screen3
    },
    {
      name: "CCharts Online",
      description: "Plot quality control charts online",
      link: "https://carlosqsilva.github.io/ccharts-online/",
      tech: "React Redux Chartjs",
      shot: screen1
    },
    {
      name: "Astronomy Picture of the Day",
      description:
        "Uses Nasa APOD api to display new Astronomy picture every day",
      link: "https://carlosqsilva.github.io/Astronomy-Picture-of-the-Day/",
      tech: "Vuejs Bulma",
      shot: screen2
    }
  ],
  other: [
    {
      name: "Pyspc",
      description: "Python library to plot quality control charts.",
      link: "https://github.com/carlosqsilva/pyspc"
    },
    {
      name: ".Dotfiles",
      description: "My dotfiles just for backup purposes",
      link: "https://github.com/carlosqsilva/dotfiles"
    },
    {
      name: "ytview",
      description: "Node cli tool to search and view youtube in mpv/vlc player",
      link: "https://github.com/carlosqsilva/ytview"
    },
    {
      name: "SpreadSheet-unlock",
      description: "Unlock SpreadSheets Protected by Passwords",
      link: "https://github.com/carlosqsilva/SpreadSheet-Unlock"
    },
    {
      name: "Youtube Music Player",
      description: "Electron App to listen youtube music videos in background",
      link: "https://github.com/carlosqsilva/Youtube-Music-Player"
    }
  ]
}

const Projects = () => {
  return (
    <section class={style.projects}>
      <div class={style.container}>
        <h2 class={style.title}>Recent Projects</h2>

        <div class={style.card}>
          {projects.last.map((project, i) => (
            <a
              class={style.project}
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.shot} alt="" />
              <span class={style.project_title}>{project.name}</span>
              <span class={style.project_tech}>{project.tech}</span>
              <p>{project.description}</p>
            </a>
          ))}
        </div>

        <h2 class={style.title}>Other Projects</h2>

        <div class={style.others}>
          {projects.other.map((project, i) => (
            <a
              class={style.other}
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{project.name}</span>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
