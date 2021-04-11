import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsLists.scss';

const ProjectsLists = (props) => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    document.title = 'Anand Angalig | Projects';
    axios
      .get('./data/projects.json')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.error('Axios GET failed!', error);
      });
  }, []);

  const renderProjectCards = () => {
    return Object.entries(projects).map(function ([name, data]) {
      return <ProjectCard key={name} project={data} />;
    });
  };

  return <div className="projects_list">{renderProjectCards()}</div>;
};

export default ProjectsLists;
