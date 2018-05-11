import { h } from "preact"
import styled from "styled-components"
import { ListInfo } from "../Miscellaneous/list"
import { Basic } from "../Miscellaneous/link"

const Featured = ({ project, children }) => (
  <Wrapper>
    <Container>
      <Title>{project.name}</Title>

      <ListInfo list={project.tech} />

      <Description>{project.description}</Description>
      {children}
    </Container>
    <Container>
      <Basic href={project.link}>
        <Image src={project.image} />
      </Basic>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 764px) {
    flex-direction: row;
  }
`

const Container = styled.div`
  flex: 1;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
`

const Description = styled.p`
  line-height: 1.5em;
  font-size: 1.1rem;
`

const Image = styled.img.attrs({
  alt: props => props.alt || ""
})`
  width: 100%;
  margin: 2rem 0;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2rem) scale(1.02);
  }
`

export default Featured
