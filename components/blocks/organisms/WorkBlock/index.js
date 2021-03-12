import Container from '../../../atoms/container'
import Button from '../../../atoms/button'
import Description from '../../../atoms/description'
import Title from '../../../atoms/title'

const WorkBlock = ({ name, data, class: className }) => {
  const { image, title, button, description, color } = data;
  const gridClasses = image ? 'grid md:grid-cols-2 ' : '';
  return (
    <div className={className}>
      <Container className={`${gridClasses}`}>
        <div className={image ? 'p-5' : 'container mx-auto'}>
          <Title>{title}</Title>
          <Description>{description}</Description>

          {button && <Button {...button} />}
        </div>
        {image && (
          <div>
            <img src={image} alt={name} />
          </div>
        )}
      </Container>{' '}
    </div>
  );
};

export default WorkBlock;
