import {
  ContainerSkills,
  ListInfoStyled,
  ListSkills,
  TitleSkills,
} from './Skills.styled';

const Skills = () => {
  return (
    <ContainerSkills>
      <h2 className="title-1">Skills</h2>
      <ListInfoStyled>
        <li>
          <TitleSkills>Tech Skills</TitleSkills>
          <ListSkills>
            <li>HTML</li>
            <li>CSS </li>
            <li>Java Script</li>
            <li>SASS</li>
            <li>BEM</li>
            <li>Responsive/ Adaptive layout</li>
            <li>GIT</li>
            <li>REST API (fetch / axios)</li>
            <li>React</li>
            <li>Styled-components</li>
            <li>React hooks</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Material UI</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ListSkills>
        </li>
        <li>
          <TitleSkills>Soft Skills</TitleSkills>
          <ListSkills>
            <li>Coordination of activities</li>
            <li>Making presentations</li>
            <li>Analytical thinking</li>
            <li>Self-motivation</li>
            <li>Teamwork</li>
            <li>Quiet</li>
            <li>Communicative skills/Social skills</li>
            <li>Versatile</li>
            <li>Honest</li>
          </ListSkills>
        </li>
        <li>
          <TitleSkills>Languages</TitleSkills>
          <ListSkills>
            <li>English - pre-intermediate</li>
            <li>Ukrainian - native</li>
            <li>Russian - fluent</li>
          </ListSkills>
        </li>
      </ListInfoStyled>
    </ContainerSkills>
  );
};

export default Skills;
