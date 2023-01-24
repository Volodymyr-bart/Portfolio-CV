import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

const Contacts = () => {
  return (
    <>
      <Section>
        <Container>
          <h2 className="title-1">Contacts</h2>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Zhytomyr, Ukraine</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+380634864669">+380634864669</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:bartzh1991@gmail.com">bartzh1991@gmail.com</a>
              </p>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default Contacts;
