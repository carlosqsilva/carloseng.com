import { h } from "preact"
import { Link } from "../Miscellaneous/link"
import style from "./style.css"

const Github = "https://github.com/carlosqsilva/carloseng.com"
const Preact = "https://github.com/developit/preact"
const Parcel = "https://github.com/parcel-bundler/parcel"

const Footer = ({ lang }) => (
  <footer class={style.footer}>
    {lang === "en" ? (
      <p class={style.content}>
        Made by Carlos Silva with <Link href={Preact}>Preact</Link> and{" "}
        <Link href={Parcel}>Parceljs</Link>. Code available on{" "}
        <Link href={Github}>Github</Link>.
      </p>
    ) : (
      <p class={style.content}>
        Feito por Carlos Silva com <Link href={Preact}>Preact</Link> e{" "}
        <Link href={Parcel}>Parceljs</Link>. Código disponível no{" "}
        <Link href={Github}>Github</Link>.
      </p>
    )}
    <p>MIT License</p>
  </footer>
)

export default Footer
