import LetPy from './../../components/img/education/Sertificate.png';
import Diploma from './../../components/img/education/1.jpg';
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
          </li>
          <li className="content-list__item">
            <h2 className="title-2">LetPY</h2>
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
