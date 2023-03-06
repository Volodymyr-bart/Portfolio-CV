import styled from 'styled-components';

export const InfoCardStyled = styled.li`
  max-width: 370px;
  background-color: var(--project-card-bg);
  box-shadow: var(--box-shadow);
  border-radius: 10px;

  img {
    border-radius: 10px;
  }

  h3 {
    padding: 15px 20px 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
    color: var(--project-card-text);
  }
`;
