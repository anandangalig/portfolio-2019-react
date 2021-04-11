import React, { useEffect } from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  useEffect(() => {
    document.title = 'Anand Angalig | About me';
  }, []);

  return (
    <div className="about about_container">
      <img
        className="about about_blurb--image"
        src="/images/yellowstone2018.jpg"
        alt="Anand in Yellowstone, WY"
      />

      <div className="about about_blurb--text">
        <span>Hey, I'm Anand.</span>
        <p>
          I'm a Philadelphia-based web developer currently specializing in JavaScript and React.
        </p>
        <p>
          I have a curious mind and I am always open to trying new things - whether it is a new
          cuisine or a new NPM package. I believe in lifelong learning, both in my personal and
          professional life.
        </p>
        <p>
          At work, I bring professionalism, excellent communication skills, and a positive attitude.
        </p>
        <p>
          In my free time I enjoy reading good books and cooking while listening to my favorite
          podcasts.
        </p>
      </div>

      <div className="about about_tools">
        <span>Toolbox</span>
        <ul>
          <li>JavaScript/Node.js</li>
          <li>Some PHP</li>
          <li>React + Redux</li>
          <li>CSS/Sass</li>
          <li>Drupal, WordPress</li>
          <li>MySQL, MongoDB</li>
          <li>AWS Services</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="about about_misc">
        <span>Fun Facts</span>
        <ul>
          <li>Was born in Mongolia</li>
          <li>Favorite TV show: What is Jeopardy?</li>
          <li>Sixers fan</li>
          <li>Loves NPR</li>
          <li>Enjoyes cooking</li>
          <li>Practices Muay Thai and Boxing</li>
          <li>Speaks Russian and Mongolian</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
