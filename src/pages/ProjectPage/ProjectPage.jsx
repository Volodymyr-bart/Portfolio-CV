import { Link, useLocation, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import BtnGitHub from '../../components/BtnGitHub/BtnGitHub';
import { projects } from '../../helpers/projectsList';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';

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
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
            <div className="project-details__desc">
              <p>{project.development}</p>
            </div>
            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>

            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProjectPage;
