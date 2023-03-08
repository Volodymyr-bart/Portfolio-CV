import gitHubIcon from './../img/icons/gitHub-black.svg';
const BtnGitHub = ({ link, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="gitHubIcon" />
      {title}
    </a>
  );
};

export default BtnGitHub;
