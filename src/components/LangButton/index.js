import { h } from "preact"
import { USA, BRAZIL } from "../../assets"
import style from "./style.css"

const LanguageToggler = ({ onClick, lang }) => (
  <div class={style.wrapper} onClick={onClick}>
    <img src={lang === "en" ? BRAZIL : USA} alt="" />
  </div>
)

export default LanguageToggler
