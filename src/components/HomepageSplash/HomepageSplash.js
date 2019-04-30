import React from 'react';
import './HomepageSplash.scss';

const personalInfo = {
  firstName: 'ANAND',
  lastName: 'ANGALIG',
  jobTitle: 'WEB DEVELOPER',
  currentLocation: 'PHILA, PA',
};
const personalInfoJSX = Object.keys(personalInfo).map(key => {
  return (
    <div key={key} className="splash__item">
      {key}: <span>"{personalInfo[key]}",</span>
    </div>
  );
});

const HomepageSplash = props => {
  return (
    <div className="splash__text">
      <span className="splash__braces">{'{'}</span>
      {personalInfoJSX}
      <span className="splash__braces">{'}'}</span>
    </div>
  );
};

export default HomepageSplash;
