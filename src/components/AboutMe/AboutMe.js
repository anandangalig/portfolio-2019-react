import React from 'react';
import './AboutMe.scss';
import image from '../../assets/images/yellowstone2018.jpg';

const AboutMe = props => {
  return (
    <div className="about_container">
      <div className="about_blurb--image">
        <img src={image} />
      </div>
      <div className="about about_blurb--text">
        <span>Blurb</span>
        <p>Hello, I’m Anand. </p>
        <p>I’m a Philly based web developer currently specializing in JavaScript and React.</p>
        <p>
          I believe in lifelong learning, both in my personal and professional life. Recently
          decided to learn how to play guitar. It’s not going so well, but the key is to continue
          practicing, right?
        </p>
        <p>
          At work, I bring professionalism and positive attitude. At home, I make chicken
          quesedillas and drink strong ales.
        </p>
      </div>

      <div className="about about_tools">
        <span>Toolbox</span>
        <ul>
          <li> JavaScript/ES6</li>
          <li> React + Redux</li>
          <li> D3.js</li>
          <li> CSS/Sass</li>
          <li> PHP</li>
          <li> Drupal, WordPress</li>
          <li> Linux environment</li>
          <li> MySQL</li>
        </ul>
      </div>
      <div className="about about_misc">
        <span>Misc.</span>
        <li> Was born in Ulaanbaatar, Mongolia</li>
        <li> Sixers fan</li>
        <li> Can train you in Muay Thai</li>
        <li> Pro sushi chef</li>
        <li> Terrible singer</li>
        <li> Proficient in Russian</li>
      </div>
    </div>
  );
};

export default AboutMe;
