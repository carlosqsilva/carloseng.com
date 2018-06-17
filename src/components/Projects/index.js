import { h } from "preact"
import styled from "styled-components"

import Featured from "./Featured"
import Other from "./Others"

import { LanguageProject } from "../language"
import { DividerArrow } from "../Divider"
import { Link } from "../Miscellaneous/link"

import { bgCircuit } from "&"

const Projects = ({ lang }) => {
  const { last, other } = LanguageProject[lang]
  const is_eng = lang === "en"
  return (
    <Section>
      <Container>
        <Heading>{is_eng ? "Recent Project" : "Último Projeto"}</Heading>
        <Featured project={last}>
          <Link shimmer href={last.link}>
            {is_eng ? "Check it here" : "Acesse aqui"}
          </Link>
        </Featured>
      </Container>
      <Container>
        <Heading>{is_eng ? "Other Projects" : "Outros Projetos"}</Heading>
        <Other projects={other} />
      </Container>
      <DividerArrow />
    </Section>
  )
}

const Section = styled.section`
  background: url(${bgCircuit}), ${props => props.theme.black};
  color: ${props => props.theme.grey};
  padding: 1rem;
  position: relative;
  background-size: 200px;
`

const Container = styled.div`
  margin: 1.5rem auto;
  max-width: 1200px;
`

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: 4px;
  position: relative;
  display: inline-block;
  font-size: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 25%;
    transition: width 0.2s;
    will-change: width;
    background: ${props => props.theme.link};
  }

  &:hover::after {
    width: 100%;
  }
`

export default Projects
