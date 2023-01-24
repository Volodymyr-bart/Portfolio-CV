import { Link } from 'react-router-dom';
import { ContainerPagination, Item, PaginationList } from './Pagination.styled';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <ContainerPagination>
      <PaginationList>
        {pageNumbers.map(number => (
          <Item key={number} active={currentPage === number ? 'active' : ''}>
            <Link
              to={`/projects`}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </Link>
          </Item>
        ))}
      </PaginationList>
    </ContainerPagination>
  );
};

export default Pagination;
