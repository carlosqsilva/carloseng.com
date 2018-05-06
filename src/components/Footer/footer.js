import { h } from "preact"
import styled from "styled-components"
import { Info } from "../Miscellaneous/link"

const Github = "https://github.com/carlosqsilva/carloseng.com"
const Preact = "https://github.com/developit/preact"
const Styled = "https://github.com/styled-components/styled-components"

const Footer = ({ lang }) => (
  <Section>
    {lang === "en" ? (
      <p>
        Made by Carlos Silva with <Info href={Preact}>Preact</Info> and{" "}
        <Info href={Styled}>Styled Components</Info>. Code available on{" "}
        <Info href={Github}>Github</Info>.
      </p>
    ) : (
      <p>
        Feito por Carlos Silva com <Info href={Preact}>Preact</Info> e{" "}
        <Info href={Styled}>Styled Components</Info>. Código disponível no{" "}
        <Info href={Github}>Github</Info>.
      </p>
    )}
    <p>MIT License</p>
  </Section>
)

const Section = styled.footer`
  width: 100%;
  padding: 10px;
  overflow: auto;
  background: #282b2e;
  color: ${props => props.theme.grey};
  text-align: center;
`

export default Footer
