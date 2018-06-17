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
  background: linear-gradient(
    to right,
    ${props => props.theme.link},
    #fff,
    ${props => props.theme.link}
  );
  background-color: ${props => props.theme.link};
  background-repeat: no-repeat;
  background-size: 80px 100%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  padding-right: 100px;
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
  font-size: 16px;
`

export const Link = Info.extend`
  font-size: 1rem;
  color: ${props => props.theme.link};
  ${props => props.shimmer && shimmer};

  & + a {
    margin-left: 20px;
  }
`
