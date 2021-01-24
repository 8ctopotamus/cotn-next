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
  console.log(data)

  const gridClasses = image ? 'grid md:grid-cols-2' : ''

  return (
    <div className={`container mx-auto pt-2 pb-2 ${className} ${gridClasses}`}>
      {image && (
        <div>
          <img src={image} alt={name} />
        </div>
      )}
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button {...button} />
      </div>
    </div>
  )
}

export default WorkBlock