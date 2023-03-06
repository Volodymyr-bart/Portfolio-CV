import { useState } from 'react';

import Container from 'components/Container/Container';
// import Pagination from 'components/Pagination/Pagination';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import { projects } from 'helpers/projectsList';
import { ProjectsList } from './Projects.styled';
import { Project } from 'components/Project/Project';
// import { Project } from 'components/Project/Project';
// import { ProjectsList } from './Projects.styled';
// import { projects } from 'helpers/projectsList';

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(9);
  const itemsPerPage = 9;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentList = projects.slice(firstItemIndex, lastItemIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(paginate);

  return (
    <>
      <Section>
        <Container>
          <Title>Projects</Title>
          <ProjectsList>
            {currentList.map((project, index) => (
              <Project
                title={project.title}
                img={project.img}
                key={project.title}
                index={index}
                development={project.development}
              />
            ))}
          </ProjectsList>
          {/* <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={projects.length}
            paginate={paginate}
          /> */}
        </Container>
      </Section>
    </>
  );
};
