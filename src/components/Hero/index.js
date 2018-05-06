import { h } from "preact"
import styled from "styled-components"
import { videowebm, videomp4 } from "../../assets"
import { LanguageHero } from "../language"
import { DividerArrow } from "../Divider"
import { Link } from "../Miscellaneous/link"

import Background from "../../assets/graph-paper.svg"

const Home = ({ lang }) => {
  const { cta, description } = LanguageHero[lang]
  return (
    <Section>
      <Video autoPlay="true" loop>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </Video>

      <Container>
        <Greeting>{cta}</Greeting>

        <Description>{description}</Description>

        <Wrapper>
          <Link href="mailto:carlosqsilva@outlook.com">Email</Link>
          <Link href="https://www.linkedin.com/in/carlosqsilva">Linkedin</Link>
          <Link shimmer href="https://github.com/carlosqsilva">
            Github
          </Link>
        </Wrapper>
      </Container>
      <DividerArrow />
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  padding: 1rem;
  position: relative;
  height: 98vh;
  background: linear-gradient(to bottom, transparent 70%, #111),
    url(${Background});
  background-size: cover, 200px;
`

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  /* z-index: 2; */
`

const Greeting = styled.h1`
  position: relative;
  display: inline-block;
  font-size: calc(2rem + 2vw);
  margin-bottom: 2rem;
  padding-bottom: 15px;
  color: white;

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    width: calc(55px + 1vw);
    display: block;
    background-color: white;
    will-change: width;
    transition: width 300ms;
  }
`

const Description = styled.p`
  font-size: calc(1rem + 1vw);
  color: white;
  margin: 0;
  line-height: 1.4em;
  margin-bottom: 1.5em;
`

const Wrapper = styled.div`
  display: inline-flex;
`

export default Home
