import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';

const Navbar = () => {
  const activeLink = 'nav-list__link--active';
  const normalLink = 'nav-list__link';
  return (
    <nav className="nav">
      <Container>
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Portfolio</strong> Volodymyr Bortokhov
          </NavLink>
          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Education
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
