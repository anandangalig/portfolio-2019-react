import React from 'react';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__email">anandangalig(at)gmail.com</div>
      <ul className="footer__social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/anand-angalig/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x fa-fw" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/anand_angalig" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square fa-2x fa-fw" />
          </a>
        </li>
        <li>
          <a href="https://github.com/anandangalig" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-square fa-2x fa-fw" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
