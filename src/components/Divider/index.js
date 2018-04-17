import { h } from "preact"
import st from "./style.css"

export const DividerArrow = () => (
  <divider class={`${st.divider} ${st.arrow}`} />
)
export const DividerStopper = () => (
  <divider class={`${st.divider} ${st.stopper}`} />
)
