import React, { Component } from "react";
import { motion } from 'framer-motion'

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3><a href={work.link} target="_blank" rel="noreferrer" color="#000000"><u>{work.company}</u></a></h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const certifications = this.props.data.certifications.map(function (certifications) {
      return (
        <div key={certifications.certification}>
          {certifications.link === "" ? <h3>{certifications.certification}</h3> : <><h3><a href={certifications.link} target="_blank" rel="noreferrer" color="#000000"><u>{certifications.certification}</u>
            <img src="../images/aws-certified-cloud-practitioner.png" alt="Certification" style={{ marginLeft: "32px", verticalAlign: "middle" }} />
          </a></h3>
          <p>
            Verification Code: {certifications.code}
          </p></>}
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const moreSkills = this.props.data.moreSkills.map((moreSkills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + moreSkills.name.toLowerCase();
      const width = moreSkills.level;

      return (
        <li key={moreSkills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{moreSkills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Certifications</span>
              </h1>
            </div>

            <div className="nine columns main-col">{certifications}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="skills-container">
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
              <div className="bars">
                <ul className="skills">{moreSkills}</ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default Resume;
