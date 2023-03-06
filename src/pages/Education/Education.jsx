import LetPy from './../../components/img/education/Letpy-compress.jpg';
import Diploma from './../../components/img/education/ZDTU-compress.jpg';
import GoIT from './../../components/img/education/Goit-compress.jpg';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
const Education = () => {
  return (
    <Section>
      <Container>
        <h2 className="title-1">Education</h2>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">GoIT</h2>
            <img src={GoIT} alt="LetPy" />
          </li>
          <li className="content-list__item">
            <h2 className="title-2">LetPy</h2>
            <img src={LetPy} alt="LetPy" />
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Zhytomyr Polytechnic State University</h2>
            <img src={Diploma} alt="Diploma" />
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Education;
