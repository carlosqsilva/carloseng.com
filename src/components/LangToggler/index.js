import { h } from "preact"
import styled from "styled-components"

const Toggler = ({ onClick, lang }) => (
  <Wrapper onClick={onClick}>
    <Text>
      <Hide>{lang === "en" ? " pt" : " en"} &#8651;</Hide>
      {` ${lang}`}
    </Text>
  </Wrapper>
)

const Text = styled.span`
  color: ${props => props.theme.light};
  font-size: 1rem;
`

const Hide = styled.span`
  opacity: 0;
  transition: opacity 200ms;
`

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    ${Hide} {
      opacity: 1;
    }
  }
`

export default Toggler
