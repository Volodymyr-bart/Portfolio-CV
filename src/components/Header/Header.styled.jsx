import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 40px 0;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--header-bg);
  background-image: url('./../components/img/header-bg.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  color: var(--header-text);
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;

    strong {
      font-size: 60px;
      font-weight: 700;
    }

    em {
      font-style: normal;
      color: var(--accent);
    }
  }

  @media (max-width: 620px) {
    min-height: unset;

    h1 {
      font-size: 30px;
      strong {
        font-size: 40px;
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 660px;

  div {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.333;

    p + p {
      margin-top: 0.5em;
    }
  }
`;
