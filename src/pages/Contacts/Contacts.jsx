import Container from 'components/Container/Container';
import SecondTitle from 'components/SecondTitle/SecondTitle';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import { ContactsList } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>Contacts</Title>
          <ContactsList>
            <li>
              <SecondTitle>Location</SecondTitle>
              <p>Zhytomyr, Ukraine</p>
            </li>
            <li>
              <SecondTitle>Telegram / WhatsApp</SecondTitle>
              <p>
                <a href="tel:+380634864669">+380634864669</a>
              </p>
            </li>
            <li>
              <SecondTitle>Email</SecondTitle>
              <p>
                <a href="mailto:bartzh1991@gmail.com">bartzh1991@gmail.com</a>
              </p>
            </li>
          </ContactsList>
        </Container>
      </Section>
    </>
  );
};

export default Contacts;
