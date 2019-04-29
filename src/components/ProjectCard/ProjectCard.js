import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  let { title, description, image, github_link, link, link_external, tech_used } = project;
  return (
    <div className="project__card">
      <div className="project__title">{title}</div>
      <div className="project__desc">{description}</div>
      <img
        height="100"
        width="auto"
        className="project__image"
        alt={title}
        src={`/images/${image}`}
      />
      <div className="project__links">
        <a href={github_link} target="_blank">
          GitHub Repo
        </a>
        <a href={link} target={link_external ? '_blank' : '_self'}>
          Learn More
        </a>
      </div>
      <div className="project__tech-used">
        <ul>
          {tech_used.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
