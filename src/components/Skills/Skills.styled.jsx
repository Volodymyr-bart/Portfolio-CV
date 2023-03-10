import styled from 'styled-components';

export const ListInfoStyled = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 50px;

  line-height: 1.5;

  li {
    min-width: 220px;
    word-wrap: normal;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 100px;
    justify-content: center;
    /* gap: 30px; */
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

  li:hover {
    color: var(--accent);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const ContainerSkills = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;

  box-shadow: var(--box-shadow);
`;
export const ListInfoItemStyled = styled.li``;
