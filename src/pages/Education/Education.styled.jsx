import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: center;
  /* align-items: center; */
  img {
    width: 50%;
  }
  @media (max-width: 620px) {
    li {
      font-size: 16px;
    }
  }
`;
