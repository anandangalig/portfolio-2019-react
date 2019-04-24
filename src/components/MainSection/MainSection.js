import React from 'react';
import { Route } from 'react-router-dom';
import './MainSection.scss';

const MainSection = props => {
  return (
    <main className="main">
      <Route path="/" exact render={() => <div>List of Items1</div>} />
      <Route path="/about" exact render={() => <div>List of Items22</div>} />
      <Route path="/projects" exact render={() => <div>List of Items333</div>} />
    </main>
  );
};

export default MainSection;
