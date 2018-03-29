import { h } from "preact"
import style from "./style.css"

export const DividerArrow = () => (
  <divider class={`${style.divider} ${style.arrow}`} />
)
export const DividerStopper = () => (
  <divider class={`${style.divider} ${style.stopper}`} />
)
