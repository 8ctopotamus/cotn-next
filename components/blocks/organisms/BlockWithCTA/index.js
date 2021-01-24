import Button from '../../atoms/button'
import Description from '../../atoms/description'
import Title from '../../atoms/title'

const BlockWithCTA = ({
  data,
  class: className,
}) => {
  const { title, description, button } = data
  return (
    <div className={`container mx-auto pt-2 pb-2 ${className}`}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button {...button} />
    </div>
  )
}

export default BlockWithCTA  