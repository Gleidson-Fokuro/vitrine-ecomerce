import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/Container';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='site-info'>
          <p className='title'>Descom-Shop</p>
        </div>
        <div className='author-info'>
          <p className='template-info'>
          Este é um mini-projeto de uma vitrine e-commerce com carrinho de compras, com desenvolvido com o objetivo de praticando habilidades de desenvolvimento web aprendidas nas aulas.
          </p>
          <div className='author'>
            <p>Gleidson Neres, {new Date().getFullYear()}</p>
            <div className='links'>
              <a
                href='https://github.com/Gleidson-Fokuro'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href='https://www.linkedin.com/in/gleidson-da-silva-neres-767815214/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
