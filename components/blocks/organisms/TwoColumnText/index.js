import Container from '../../atoms/container';

const TwoColumnText = ({ data, class: className }) => {
  const { leftText, rightText } = data;
  return (
    <Container className="grid md:grid-cols-2">
      <div className="grid text-8xl text-center  max-w-xl py-20 font-bold">
        {leftText}
      </div>
      <div className="grid text-5xl justify-self-center pt-20 font-sans font-light">
        {rightText}
      </div>
    </Container>
  );
};

export default TwoColumnText;
