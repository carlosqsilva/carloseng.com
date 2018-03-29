import { h } from "preact"
import style from "./style.css"

const Github = "https://github.com/carlosqsilva/carloseng.com"
const Preact = "https://github.com/developit/preact"
const Parcel = "https://github.com/parcel-bundler/parcel"

const Footer = ({ lang }) => (
  <footer class={style.footer}>
    {lang === "en" ? (
      <p class={style.content}>
        Made by Carlos Silva with{" "}
        <a href={Preact} target="_blank">
          Preact
        </a>{" "}
        and{" "}
        <a href={Parcel} target="_blank">
          Parceljs
        </a>. Code available on{" "}
        <a href={Github} target="_blank">
          Github
        </a>.
      </p>
    ) : (
      <p class={style.content}>
        Feito por Carlos Silva com{" "}
        <a href={Preact} target="_blank">
          Preact
        </a>{" "}
        e{" "}
        <a href={Parcel} target="_blank">
          Parceljs
        </a>. Código disponível no{" "}
        <a href={Github} target="_blank">
          Github
        </a>.
      </p>
    )}
    <p>MIT License</p>
  </footer>
)

export default Footer
