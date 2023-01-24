const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
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
          href="https://drive.google.com/file/d/1aY7qQZhdZtSeQpFYRA9XPDcabwWUrgKa/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
