import React, { Component } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      successMessage: '',
      errorMessage: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;
    console.log("Sending Email with the following data:", { name, email, message });

    // Send email using EmailJS
    emailjs.send('service_veqgezf', 'template_z36zbqj', {
      name,
      email,
      message
    }, 'c3JY3KXQoyJde0vSQ')
    .then((response) => {
      // Clear input fields and show success message
      this.setState({ 
        name: '', 
        email: '', 
        message: '', 
        successMessage: "Your message was sent, thank you!", 
        errorMessage: '' 
      });
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((err) => {
      this.setState({ errorMessage: "Failed to send message, please try again.", successMessage: '' });
      console.error("Failed to send email:", err);
    });
  };

  render() {
    // Check for data prop
    if (!this.props.data) return null;

    // Destructure state
    const { name, email, message, successMessage, errorMessage } = this.state;
    const contactName = this.props.data.name;
    const city = this.props.data.address.city;
    const phone = this.props.data.phone;

    return (
      <section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                Please feel free to contact me through <a href="https://www.linkedin.com/in/williamjarviscross-1378361b6/" target="_blank" rel="noreferrer">LinkedIn</a> or email at <a href="mailto:wjarviscross@gmail.com">wjarviscross@gmail.com</a>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="row">
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <div className="eight columns">
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      size="35" 
                      id="contactName" 
                      name="name" 
                      value={name} // Controlled input
                      onChange={this.handleChange} 
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input 
                      type="text" 
                      size="35" 
                      id="contactEmail" 
                      name="email" 
                      value={email} // Controlled input
                      onChange={this.handleChange} 
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea 
                      cols="50" 
                      rows="15" 
                      id="contactMessage" 
                      name="message" 
                      value={message} // Controlled input
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button type="submit" className="submit">Submit</button>
                    <span id="image-loader"><img alt="" src="images/loader.gif" /></span>
                  </div>
                </fieldset>
              </form>

              {successMessage && <div>{successMessage}</div>}
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </motion.div>

          <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">{contactName}<br />{city}, Canada<br /><span>{phone}</span></p>
              </div>
            </aside>
          </motion.div>
        </div>
      </section>
    );
  }
}

export default Contact;
