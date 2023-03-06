import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: auto;
  padding: 60px 0 50px;
  background-color: var(--footer-bg);
  color: var(--footer-text);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 27px;
    font-size: 16px;
    ul {
      display: flex;
      column-gap: 30px;
      align-items: center;
    }
  }
  @media (max-width: 620px) {
    padding: 40px 0 30px;
    div {
      row-gap: 20px;

      ul {
        column-gap: 20px;
        li {
          width: 28px;
        }
      }
    }
  }
`;
