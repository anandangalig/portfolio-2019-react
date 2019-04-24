import React from 'react';
import './Footer.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__email">anandangalig(at)gmail.com</div>
      <ul className="footer__social-links">
        <li>
          <a href="#">
            <i class="fab fa-linkedin fa-2x fa-fw" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter-square fa-2x fa-fw" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-github-square fa-2x fa-fw" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
