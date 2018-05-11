import { h } from "preact"
import styled from "styled-components"
import { USA, BRAZIL } from "../../assets"

const Toggler = ({ onClick, lang }) => (
  <Wrapper onClick={onClick}>
    <Info>{lang} &#8651;</Info>
    <Image src={lang === "en" ? BRAZIL : USA} alt="Language" />
  </Wrapper>
)

const Info = styled.span`
  color: ${props => props.theme.light};
  transform: translateX(100%);
  transition: all 0.2s;
  opacity: 0;
  font-size: 1.2rem;
`

const Image = styled.img`
  height: 34px;
  width: 34px;
  margin-left: 5px;
  padding: 3px;
  border-radius: 50%;
`

const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 10;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${Info} {
      transform: translateX(0);
      opacity: 1;
    }
    ${Image} {
      background: ${props => props.theme.light};
    }
  }
`

export default Toggler
