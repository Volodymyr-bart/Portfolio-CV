import instagram from './../img/icons/instagram.svg';
import gitHub from './../img/icons/gitHub.svg';
import linkedIn from './../img/icons/linkedIn.svg';
import Container from 'components/Container/Container';
import { FooterStyled } from './Footer.styled';
const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://github.com/Volodymyr-bart"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/bortokhov-volodymyr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>Copyright © 2023. Created by Volodymyr Bortokhov.</p>
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
