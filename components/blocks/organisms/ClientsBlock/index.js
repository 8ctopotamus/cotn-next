import Container from '../../../atoms/container'
import Title from '../../../atoms/title'

const ClientsBlock = ({
  data,
  class: className,
}) => {
  const { title, clients } = data
  return (
    <Container>
      <Title className="text-center">{title}</Title>
      {clients && (
        <div className="flex flex-wrap justify-center">
          {clients.map(({ title: clientTitle, src, url }) => (
            <a 
              href={url ? url : '#'} 
              className="md:max-w-xs m-3"
              key={`${clientTitle}_${src}`}
            >
              {src && (
                <img src={src} alt={clientTitle} />
              )}
            </a>
          ))}
        </div>
      )}
    </Container>
  )
}

export default ClientsBlock