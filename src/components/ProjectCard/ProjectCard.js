import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  let { title, description, image, github_link, link, link_external, tech_used } = project;
  return (
    <div>
      <div className="project__card">
        <div className="project__title">{title}</div>
        <div className="project__desc">{description}</div>
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
          >
            GitHub
          </a>
          <a
            className="project__link project__link--hosted"
            href={link}
            target={link_external ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProjectCard;
