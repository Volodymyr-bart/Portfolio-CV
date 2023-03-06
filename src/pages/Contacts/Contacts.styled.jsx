import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0 auto;
  max-width: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  text-align: center;
  li {
    font-size: 18px;
    line-height: 1.5;
    a {
      color: var(--accent);
    }
    p + p {
      margin-top: 0.5em;
    }
  }
`;
