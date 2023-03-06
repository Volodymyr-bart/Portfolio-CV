import { NavLink } from 'react-router-dom';
import { ProjectStyled } from './Project.styled';

const Project = ({ title, img, index, development }) => {
  return (
    <ProjectStyled>
      <NavLink to={`/project/${index}`}>
        <img src={img} alt="Project img" />
        <h3>{title}</h3>
      </NavLink>
    </ProjectStyled>
  );
};

export default Project;
