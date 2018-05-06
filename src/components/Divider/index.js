import { h } from "preact"
import styled from "styled-components"

export const DividerArrow = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.light},
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -6px;
    left: calc(50% - 7px);
    width: 14px;
    height: 14px;
    background-color: ${props => props.theme.black};
    transform: rotate(45deg);
    border-bottom: 1px solid ${props => props.theme.light};
    border-right: 1px solid ${props => props.theme.light};
  }
`
