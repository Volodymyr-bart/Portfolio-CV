// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerPagination = styled.div`
  margin-top: 30px;
`;
export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const Item = styled.li`
  padding: 10px;
  border-radius: 30%;
  background-color: ${p => {
    return p.active ? 'var(--accent)' : 'var(--project-card-text)';
  }};

  a {
    color: white;
  }
`;
