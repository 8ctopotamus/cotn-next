import Container from '../../../atoms/container'
import Logo from '../../../logo'

const COTNFullLogo = () => {
  return (
    <Container className="grid grid-cols-6">
      <div className="col-start-2 col-span-4">
        <Logo full />
      </div>
    </Container>
  )
}

export default COTNFullLogo