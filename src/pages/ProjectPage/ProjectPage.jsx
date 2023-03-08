import { Link, useLocation, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import BtnGitHub from '../../components/BtnGitHub/BtnGitHub';
import { projects } from '../../helpers/projectsList';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Buttons, IframeStyled } from './ProjectPage.styled';
import SecondTitle from 'components/SecondTitle/SecondTitle';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/projects';
  return (
    <>
      <Section>
        <Container>
          <Link to={backLinkHref}>
            <button>
              <BsFillArrowLeftCircleFill
                size={'40'}
                style={{ color: 'var(--accent)' }}
              />
            </button>
          </Link>
          <div className="project-details">
            <SecondTitle>{project.title}</SecondTitle>
            {project.livePage && (
              <IframeStyled
                src={project.livePage}
                title={project.livePage}
              ></IframeStyled>
            )}
            <div className="project-details__desc">
              <p>{project.development}</p>
            </div>
            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>
            <Buttons>
              {project.livePage && (
                <BtnGitHub title="Live page" link={project.livePage} />
              )}
              {project.frontCode && (
                <BtnGitHub title="Fron-end code" link={project.frontCode} />
              )}
              {project.backCode && (
                <BtnGitHub title="Back-end code" link={project.backCode} />
              )}
            </Buttons>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProjectPage;

// {
//   /* <img
//               src={project.imgBig}
//               alt={project.title}
//               className="project-details__cover"
//             /> */
// }

// {
//   /* {project.livePage && (
//           <Container>
//             <IframeStyled
//               src={project.livePage}
//               title={project.livePage}
//               // width="500px"
//               // height="500px"
//             ></IframeStyled>
//           </Container>
//         )} */
// }
