import { h } from "preact"
import styled from "styled-components"
import { USA, BRAZIL } from "../../assets"

const Toggler = ({ onClick, lang }) => (
  <Wrapper onClick={onClick}>
    <img src={lang === "en" ? BRAZIL : USA} alt="Language" />
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: ${props => props.theme.light};
  }
`

export default Toggler
