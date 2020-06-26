import React, { useEffect } from 'react';
import './AboutMe.scss';

const AboutMe = (props) => {
  useEffect(() => {
    document.title = 'Anand Angalig | About me';
  });

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
          I’m a Philadelphia-based web developer currently specializing in JavaScript and React.
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
          <li>PHP, dash of Golang</li>
          <li>React + Redux</li>
          <li>CSS/Sass</li>
          <li>Drupal, WordPress</li>
          <li>Linux environment</li>
          <li>MySQL, DynamoDB, and MongoDB</li>
          <li>AWS + Serverless Framework</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="about about_misc">
        <span>Fun Facts</span>
        <ul>
          <li>Was born in Mongolia</li>
          <li>Favorite TV show: What is Jeopardy?</li>
          <li>Sixers fan. "Trust the Process!"</li>
          <li>
            Trains at{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.heavyhittersphilly.com/">
              Heavy Hitters Muay Thai
            </a>
          </li>
          <li>Partied with the Dude "Big Lebowski" once</li>
          <li>Loves NPR</li>
          <li>Sushi chef at heart</li>
          <li>Speaks Russian and Mongolian</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
