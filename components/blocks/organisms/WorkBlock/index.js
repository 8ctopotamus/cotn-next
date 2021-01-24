import Container from '../../atoms/container'
import Button from '../../atoms/button'
import Description from '../../atoms/description'
import Title from '../../atoms/title'

const WorkBlock = ({
  name,
  data,
  class: className,
}) => {
  const { image, workDescription } = data
  const { title, button, description } = workDescription
  const gridClasses = image ? 'grid md:grid-cols-2' : ''
  return (
    <Container className={`${className} ${gridClasses}`}>
      {image && (
        <div>
          <img src={image} alt={name} />
        </div>
      )}
      <div className={image ? 'p-5' : 'container mx-auto'}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button {...button} />
      </div>
    </Container>
  )
}

export default WorkBlock