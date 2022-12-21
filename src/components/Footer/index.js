import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { TfiInstagram } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
// import {GiRhinocerosHorn} from 'react-icons/gi';
import "./style.css";

function Footer() {
  return (
    <footer>
      {/* <h3>Made by Amber Wilson <GiRhinocerosHorn /><span className='heart' role='img' aria-labelledby='heart'></span></h3> */}
      <div class='container d-flex justify-content-center'>
        <ul>
          <a href='https://github.com/awil414'>
            <li className='ftr-icon'>
              <GoMarkGithub />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>
            <li className='ftr-icon'>
              <GrLinkedin />
            </li>
          </a>
          <a href='mailto:awil414@gmail.com'>
            <li className='ftr-icon'>
              <MdEmail />
            </li>
          </a>
          <a href='https://www.instagram.com/amb_wilson/'>
            <li className='ftr-icon'>
              <TfiInstagram />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
