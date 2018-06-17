import { h } from "preact"
import styled from "styled-components"

export const ListInfo = ({ list }) => (
  <div>{list.map((item, i) => <Info key={i}>{item}</Info>)}</div>
)

const Info = styled.span`
  color: ${props => props.theme.info};
  font-size: 0.8rem;

  & + &::before {
    content: "/";
    margin: 0 4px;
    color: ${props => props.theme.light};
    font-size: 0.75rem;
  }
`

export const ListInline = ({ list }) => (
  <span>{list.map((item, i) => <Red key={i}>{item}</Red>)}</span>
)

const Red = styled.span`
  color: ${props => props.theme.red};
  font-size: 0.7rem;

  & + &::before {
    content: "/";
    margin: 0 2px;
    color: ${props => props.theme.dark};
    font-size: 0.6rem;
  }
`
