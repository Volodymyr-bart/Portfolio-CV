import { HeaderStyled, HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Vova</em>
            <br />
          </strong>
          a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1OyfbTZGQf9QmQvqY0QtwhxqdnAOQRbPX/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Download CV
        </a>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
