import styled from 'styled-components';

export const ListInfoStyled = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 50px;
  line-height: 1.5;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;
export const TitleSkills = styled.p`
  margin-bottom: 20px;

  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
export const ListSkills = styled.ul`
  display: inline-flex;
  flex-direction: column;
  list-style: disc;
  row-gap: 10px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const ContainerSkills = styled.ul`
  display: flex;
  flex-direction: column;
`;
