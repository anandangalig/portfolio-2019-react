import React from 'react';
import './AboutMe.scss';

const AboutMe = props => {
  return (
    <div className="about about_container">
      <img
        className="about about_blurb--image"
        src="/images/yellowstone2018.jpg"
        alt="Anand in Yellowstone, WY"
      />

      <div className="about about_blurb--text">
        <span>Hey, I’m Anand.</span>
        <p>I’m a Philly based web developer currently specializing in JavaScript and React.</p>
        <p>
          I believe in lifelong learning, both in my personal and professional life. Recently
          decided to learn how to play guitar. It’s not going so well...
        </p>
        <p>
          At work, I bring professionalism and positive attitude. At home, I make chicken
          quesedillas and drink strong ales.
        </p>
      </div>

      <div className="about about_tools">
        <span>Toolbox</span>
        <ul>
          <li>JavaScript/ES6</li>
          <li>React + Redux</li>
          <li>D3.js</li>
          <li>CSS/Sass</li>
          <li>PHP</li>
          <li>Drupal, WordPress</li>
          <li>Linux environment</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className="about about_misc">
        <span>Misc.</span>
        <ul>
          <li>Was born in Mongolia</li>
          <li>76'ers fan</li>
          <li>Can train you in Muay Thai</li>
          <li>Partied with "Big Lebowski" one time</li>
          <li>Pro sushi chef</li>
          <li>Terrible singer</li>
          <li>Proficient in Russian</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
