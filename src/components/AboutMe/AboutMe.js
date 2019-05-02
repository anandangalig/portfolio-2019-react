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
        <p>
          I’m a Philadelphia based web developer currently specializing in JavaScript and React.
        </p>
        <p>
          I am curios, and always open to trying new things. I believe in lifelong learning, both in
          my personal and professional life.
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
        <span>Fun Facts</span>
        <ul>
          <li>Was born in Mongolia</li>
          <li>76'ers fan</li>
          <li>Can train you in Muay Thai</li>
          <li>Partied with the Dude "Big Lebowski" one time</li>
          <li>Sushi chef at heart</li>
          <li>Loves the NPR</li>
          <li>Speaks Russian</li>
          <li>Favorite TV show: What is Jeopardy?</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
