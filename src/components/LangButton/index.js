import { h } from "preact"
import { USA, BRAZIL } from "../../assets"
import st from "./style.css"

const LanguageToggler = ({ onClick, lang }) => (
  <div class={st.wrapper} onClick={onClick}>
    <img src={lang === "en" ? BRAZIL : USA} alt="" />
  </div>
)

export default LanguageToggler
