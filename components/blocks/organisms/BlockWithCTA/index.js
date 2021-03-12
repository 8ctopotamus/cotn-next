import Container from '../../../atoms/container'
import Button from '../../../atoms/button'
import Description from '../../../atoms/description'
import Title from '../../../atoms/title'
import Section from '../../../atoms/section'

const BlockWithCTA = ({
  color,
  data,
  class: className,
}) => {
  const { title, description, button } = data
  return (
    <Section fill={color}>
      <Container className={className}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button {...button} />
      </Container>
    </Section>
  )
}

export default BlockWithCTA  