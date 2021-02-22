import Container from '../../atoms/container'
import Button from '../../atoms/button'
import Description from '../../atoms/description'
import Title from '../../atoms/title'

const TeamRoster = ({
  name,
  data,
  class: className,
}) => {
  const { title, crew } = data
  console.log(crew)
  return (
    <>
      <Title className={"text-center"}>{title}</Title>
      <Container className={`flex flex-wrap justify-center ${className}`}>
        {crew.map(({name, image, position}) => (
          <div className="mr-5 ml-5 mb-5 max-w-sm">
            <img src={image} alt={name} className="mb-2" />
            <Title className="mb-2">{name}</Title>
            <Description className="mb-2">{position}</Description>     
          </div>
        ))}
      </Container>
    </>
  )
}

export default TeamRoster