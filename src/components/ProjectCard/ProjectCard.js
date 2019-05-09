import React from 'react';
import ReactGA from 'react-ga';
import './ProjectCard.scss';

const sendAnalyticsEvent = (projectTitle, destination) => {
  if (destination === 'github') {
    ReactGA.event({
      category: 'Project',
      action: `${projectTitle} GitHub repo visited`,
    });
  } else if (destination === 'hosted') {
    ReactGA.event({
      category: 'Project',
      action: `${projectTitle} hosted project visited`,
    });
  }
};

const ProjectCard = ({ project }) => {
  let { title, description, image, github_link, link, link_external, tech_used } = project;

  const convertHtmlString = desc => {
    return { __html: desc };
  };

  return (
    <div className="project">
      <div className="project__title">{title}</div>
      <div className="project__desc" dangerouslySetInnerHTML={convertHtmlString(description)} />
      <div className="project__image">
        <img alt={title} src={`/images/${image}`} />
      </div>
      <div className="project__tech-used">
        <ul>
          {tech_used.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="project__links">
        <a
          className="project__link project__link--github"
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            sendAnalyticsEvent(title, 'github');
          }}
        >
          GitHub
        </a>
        <a
          className="project__link project__link--hosted"
          href={link}
          target={link_external ? '_blank' : '_self'}
          rel="noopener noreferrer"
          onClick={() => {
            sendAnalyticsEvent(title, 'hosted');
          }}
        >
          View Project
        </a>
      </div>
      <div className="hr">
        <hr />
      </div>
    </div>
  );
};

export default ProjectCard;
