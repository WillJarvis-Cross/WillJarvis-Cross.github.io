import React, { Component } from "react";
import { motion } from 'framer-motion'

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = <p>Hi! I recently graduated from the University of Toronto with a degree in computer science, and I am currently working as a Full Stack Web Developer at Optimize Wealth Management. At Optimize, I develop and maintain a financial management platform using TypeScript and React, enabling users to efficiently manage their finances. Previously, I worked for 2 years at Super.com (previously Snapcommerce), a commerce company dedicated to catering to those left behind by credit companies. Outside of my work, I enjoy learning about the intricacies of our Universe and staying physically active by playing various sports with friends.</p>;    const city = this.props.data.address.city;
    const province = this.props.data.address.province;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {province}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="Resume.pdf" target="_blank" className="button">
                      <i className="fa fa-book"></i>Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default About;
