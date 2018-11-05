import React from "react";

const Footer = ({}) => {
  return (
    <div>
        <ul>
          <li className="footergame">
            <a className="nav-link text-white" href="#">
              ©Game Date Center
            </a>
          </li>
          <li className="footermentions">
            <a className="nav-link text-white" href="#">
              Mentions Légales
            </a>
          </li>
          <li className="footername">
            Made By: Charles, Robin, Michel, Gautier
          </li>
        </ul>
    </div>
  );
};

export default Footer;
