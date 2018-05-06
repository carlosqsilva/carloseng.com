import { h } from "preact"
import styled from "styled-components"
import { Basic } from "../Miscellaneous/link"
import { ListRed } from "../Miscellaneous/list"

const Other = ({ projects }) => (
  <Wrapper>
    {projects.map(({ link, name, description, tech }, i) => (
      <Card href={link}>
        <Title>{name}</Title>
        <ListRed list={tech} />
        <Description>{description}</Description>
      </Card>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
`

const Card = Basic.extend`
  background: ${props => props.theme.light};
  color: ${props => props.theme.dark};
  transition: transform 0.2s ease;
  border-radius: 4px;
  padding: 10px;

  &:hover {
    transform: translateY(-0.5rem);
  }
`

const Title = styled.h3`
  display: inline;
  margin-right: 10px;
`

const Description = styled.p`
  margin: 0;
  /* margin-top: 0.8rem; */
`

export default Other
