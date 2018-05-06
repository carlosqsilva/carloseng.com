import styled, { css, keyframes } from "styled-components"

const shimmerAnimation = keyframes`
  from {
    background-position: top left;
  }
  to {
    background-position: top right;
  }
`

const shimmer = css`
  background: linear-gradient(to right, #097cf3, #fff, #097cf3);
  background-color: ${props => props.theme.link};
  background-repeat: no-repeat;
  background-size: 80px 100%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  padding-right: 140px;
  color: transparent;
  animation: ${shimmerAnimation} 2s infinite;
`

export const Basic = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  text-decoration: none;
`

export const Info = Basic.extend`
  color: ${props => props.theme.info};
  align-self: center;
  font-weight: 700;
  font-size: 1rem;
`

export const Link = Info.extend`
  font-size: calc(1rem + 0.5vw);
  color: ${props => props.theme.link};
  ${props => props.shimmer && shimmer};
  & + a {
    margin-left: 20px;
  }
`
