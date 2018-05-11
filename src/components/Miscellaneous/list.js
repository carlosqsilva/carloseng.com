import { h } from "preact"
import styled from "styled-components"

export const ListInfo = ({ list, ...props }) => (
  <div>{list.map((item, i) => <Info key={i}>{item}</Info>)}</div>
)

const Info = styled.span`
  color: ${props => props.theme.info};

  & + &::before {
    content: " / ";
    color: ${props => props.theme.light};
    font-size: 0.9rem;
  }
`

export const ListInline = ({ list, ...props }) => (
  <span>{list.map((item, i) => <Red key={i}>{item}</Red>)}</span>
)

const Red = styled.span`
  color: ${props => props.theme.red};
  font-size: 0.8rem;

  & + &::before {
    content: " / ";
    color: ${props => props.theme.dark};
  }
`
