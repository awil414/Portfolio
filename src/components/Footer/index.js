import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from 'react-icons/ai';
import { TfiInstagram } from 'react-icons/tfi';
import {HiOutlineMail} from 'react-icons/hi';
import {GiRhinocerosHorn} from 'react-icons/gi';
import style from './style.css';

function Footer() {
    return (
        <footer>
            <h3>Made by Amber Wilson <GiRhinocerosHorn /><span className='heart' role='img' aria-labelledby='heart'></span></h3>
            <p>
                <ul>
                    <a href='https://github.com/awil414'>
                        <li className='ftr-icon'><VscGithub /></li>
                    </a>
                    <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>
                        <li className='ftr-icon'><AiOutlineLinkedin /></li>
                    </a>
                    <a href='mailto:awil414@gmail.com'>
                        <li className='ftr-icon'><HiOutlineMail /></li>
                    </a>
                    <a href='https://www.instagram.com/amb_wilson/'>
                        <li className='ftr-icon'><TfiInstagram /></li>
                    </a>
                </ul>
            </p>
        </footer>
    )
}

export default Footer;
