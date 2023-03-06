import styled from 'styled-components';
export const ContainerAboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media screen and (min-width: 768px) {
    column-gap: 50px;
    flex-direction: row;
  }
`;
export const ContainerAvatarStyled = styled.div`
  max-width: 70%;
  margin: 0 auto;
  height: fit-content;
  @media screen and (min-width: 480px) {
    min-width: 30%;
  }
  img {
    border-radius: 10px;
  }
`;
export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 30px;
  border-radius: 10px;
  /* margin-top: 30px; */
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  box-shadow: var(--box-shadow);
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
`;
