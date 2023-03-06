import { NavLink } from 'react-router-dom';
import { InfoCardStyled } from './InfoCard.styled';

export const InfoCard = ({ title, img, index, development }) => {
  return (
    <InfoCardStyled>
      <NavLink to={`/project/${index}`}>
        <img src={img} alt="Project img" />
        <h3>{title}</h3>
      </NavLink>
    </InfoCardStyled>
  );
};
