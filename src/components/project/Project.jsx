import { NavLink } from 'react-router-dom';

const Project = ({ title, img, index, development }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt="Project img" className={title} />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
