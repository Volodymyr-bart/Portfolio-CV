import Title from 'components/Title/Title';
import { language, softSkill, techSkill } from 'data/skill';
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
            <TitleSkills>Tech Skills</TitleSkills>
            <ListSkills>
              {techSkill.map(el => (
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
        </ListInfoStyled>
      </ContainerSkills>
    </>
  );
};

export default Skills;
