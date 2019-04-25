import React from 'react';
import { Route } from 'react-router-dom';
import './MainSection.scss';
import HomepageSplash from '../HomepageSplash/HomepageSplash';
import AboutMe from '../AboutMe/AboutMe';
import ProjectsLists from '../ProjectsLists/ProjectsLists';

const MainSection = props => {
  return (
    <main className="main">
      <Route path="/" exact component={HomepageSplash} />
      <Route path="/about" exact component={AboutMe} />
      <Route path="/projects" exact component={ProjectsLists} />
    </main>
  );
};

export default MainSection;
