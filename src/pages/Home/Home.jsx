import About from 'components/About/About';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Skills from 'components/Skills/Skills';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <About />
        </Container>
        {/* </Section> */}
        {/* <Section> */}
        <Container>
          <Skills />
        </Container>
      </Section>
    </>
  );
};

export default Home;
