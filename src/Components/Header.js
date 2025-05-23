import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { motion } from 'framer-motion'

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg color="#ffffff" type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="responsive-headline">{name}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h3>{description}.</h3>
            </motion.div>
            <hr />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <ul className="social">
                <a href={linkedin} rel="noreferrer" target="_blank" className="button btn project-btn">
                  <i className="fa fa-linkedin-square"></i>LinkedIn
                </a>
                <a href={github} rel="noreferrer" target="_blank" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </motion.div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
