import Title from 'components/Title/Title';
import { backend, frontend, language, softSkill, utilities } from 'data/skill';
import {
  ContainerSkills,
  ListInfoStyled,
  ListSkills,
  TitleSkills,
} from './Skills.styled';

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <ContainerSkills>
        <ListInfoStyled>
          <li>
            <TitleSkills>Front-end Skills</TitleSkills>
            <ListSkills>
              {frontend.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ListSkills>
          </li>
          <li>
            <TitleSkills>Back-end Skills</TitleSkills>
            <ListSkills>
              {backend.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ListSkills>
          </li>
          <li>
            <TitleSkills>Soft Skills</TitleSkills>
            <ListSkills>
              {softSkill.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ListSkills>
          </li>
          <li>
            <TitleSkills>Languages</TitleSkills>
            <ListSkills>
              {language.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ListSkills>
          </li>
          <li>
            <TitleSkills>Utilities</TitleSkills>
            <ListSkills>
              {utilities.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ListSkills>
          </li>
        </ListInfoStyled>
      </ContainerSkills>
    </>
  );
};

export default Skills;
