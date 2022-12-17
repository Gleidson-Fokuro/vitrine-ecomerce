import Container from './Container';
import '../css/Hero.css';

const Hero = (props) => {
  const { title, text, heroCss = {}, bgCss = {}, posRight = false } = props;
  return (
    <div className='hero' style={heroCss}>
      <div className='gradient' style={bgCss}>
        <Container classes={posRight ? ['right'] : ['left']}>
          {props.title !== '' ? <h2>{title}</h2> : null}
          {props.text !== '' ? <p>{text}</p> : null}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
