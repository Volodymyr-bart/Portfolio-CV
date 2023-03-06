import LetPy from './../../components/img/education/Letpy-compress.jpg';
import Diploma from './../../components/img/education/ZDTU-compress.jpg';
import GoIT from './../../components/img/education/Goit-compress.jpg';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import SecondTitle from 'components/SecondTitle/SecondTitle';
const Education = () => {
  return (
    <Section>
      <Container>
        <Title>Education</Title>
        <ul className="content-list">
          <li className="content-list__item">
            <SecondTitle>GoIT</SecondTitle>
            <img src={GoIT} alt="LetPy" />
          </li>
          <li className="content-list__item">
            <SecondTitle>LetPy</SecondTitle>
            <img src={LetPy} alt="LetPy" />
          </li>
          <li className="content-list__item">
            <SecondTitle>Zhytomyr Polytechnic State University</SecondTitle>
            <img src={Diploma} alt="Diploma" />
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Education;
