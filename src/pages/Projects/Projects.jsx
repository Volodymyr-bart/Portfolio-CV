import Container from 'components/Container/Container';
import Pagination from 'components/Pagination/Pagination';
import Section from 'components/Section/Section';
import { useState } from 'react';
import Project from '../../components/project/Project';
import { projects } from './../../helpers/projectsList';
// import { page_1, page_2 } from './../../helpers/visibleProjects';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(9);
  const itemsPerPage = 9;

  const lastItemIndex = currentPage * itemsPerPage;

  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItem = projects.slice(firstItemIndex, lastItemIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Section>
        <Container>
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {currentItem.map((project, index) => {
              return (
                <Project
                  title={project.title}
                  img={project.img}
                  key={project.title}
                  index={index}
                  development={project.development}
                />
              );
            })}
          </ul>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={projects.length}
            paginate={paginate}
          />
        </Container>
      </Section>
    </>
  );
};

export default Projects;
