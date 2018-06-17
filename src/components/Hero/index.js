import { h } from "preact"
import styled from "styled-components"
import { videowebm, videomp4, videoPoster, bgPaper } from "&"
import { LanguageHero } from "../language"
import { DividerArrow } from "../Divider"
import { Link } from "../Miscellaneous/link"

const Home = ({ lang }) => {
  const { cta, description } = LanguageHero[lang]
  return (
    <Section>
      <Video autoPlay muted loop poster={videoPoster}>
        <source src={videowebm} type="video/webm" />
        <source src={videomp4} type="video/mp4" />
      </Video>

      <Container>
        <Greeting>{cta}</Greeting>

        <Description>{description}</Description>

        <Wrapper>
          <Link href="mailto:carlosqsilva@outlook.com">Email</Link>
          <Link href="https://www.linkedin.com/in/carlosqsilva">Linkedin</Link>
          <Link href="https://github.com/carlosqsilva">Github</Link>
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
  background: linear-gradient(
      to bottom,
      transparent 70%,
      ${props => props.theme.black}
    ),
    url(${bgPaper});
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
`

const Greeting = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 15px;
  color: ${props => props.theme.white};

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.35rem;
    width: 3rem;
    display: block;
    background-color: ${props => props.theme.white};
    will-change: width;
    transition: width 300ms;
  }
`

const Description = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.white};
  margin: 0;
  margin-bottom: 1.5rem;
`

const Wrapper = styled.div`
  display: inline-flex;
`

export default Home
