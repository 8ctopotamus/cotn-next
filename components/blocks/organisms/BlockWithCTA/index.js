import Container from '../../atoms/container'
import Button from '../../atoms/button'
import Description from '../../atoms/description'
import Title from '../../atoms/title'

const BlockWithCTA = ({
  data,
  class: className,
}) => {
  const { title, description, button } = data
  return (
    <Container className={`text-center ${className}`}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button {...button} />
    </Container>
  )
}

export default BlockWithCTA  