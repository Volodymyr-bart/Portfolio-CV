import Title from 'components/Title/Title';
import avatar from './../../img/avatar/photo_2022-06-03_21-32-26.jpg';
import {
  AboutText,
  ContainerAboutStyled,
  ContainerAvatarStyled,
} from './About.styled';

const About = () => {
  return (
    <>
      <Title>Summary</Title>
      <ContainerAboutStyled>
        <ContainerAvatarStyled>
          <img src={avatar} alt="avatar" />
        </ContainerAvatarStyled>
        <AboutText>
          <p>
            Hi, my name is Vova. I was born and live in Zhytomyr. I completed a
            Specialist's degree in Zhytomyr Polytechnic State University and
            obtained the qualification of specialist in computer control systems
            and automatics.
          </p>
          <p>
            At university, I studied Unix systems, system administration,
            network configuration, microcontroller programming. Also, I learned
            C#, Python, Database. After studying, I went to work in a service
            center, but subsequently changed work. And I got a job in Gemini in
            the position of technical engineer coffee equipment, where I worked
            for six years.
          </p>
          <p>
            At this stage, I am taking a course Full-stack developer in the
            company GoIT. Where we are developing MERN-stack applications.
          </p>
          <p>
            I am looking for a company that values the skills of an employee,
            there is a career opportunity.
          </p>
        </AboutText>
      </ContainerAboutStyled>
    </>
  );
};

export default About;
