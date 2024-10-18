import React, { Component } from "react";
import { motion } from 'framer-motion'

let id = 0;

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false, currImg: 0}
  }

  render() {
    if (!this.props.data) return null;
    const projects = this.props.data.projects
    console.log(projects[this.state.currImg].image)
    ;

    return (
      <section id="portfolio">
        {this.state.isOpen && (
          <div className="popup-modal" onClick={() => {this.setState({isOpen: false, currImg: 0})}}>
            <i className="fa fa-4x pull-right close fa-times"></i>
            <div class="box-layout">
              <div class="dimension-label" aria-live="polite" aria-label="Current box width">
                <span data-element="width-label"></span>
              </div>
              <div></div>
              <figure class="box-demo box" data-element="parent-box">
              {this.state.currImg === 2 ? (<iframe class="youtubeLink" src="https://www.youtube.com/embed/m7pxE1DswGo" title="Pokemon Game Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : 
              (<img src={"./images/portfolio/" + projects[this.state.currImg].image} alt={projects[this.state.currImg].title} />)}
                <figcaption contenteditable>
                  {projects[this.state.currImg].description}
                </figcaption>
                <a href={projects[this.state.currImg].github} rel="noreferrer" target="_blank">
                  <i className={this.state.currImg < 2 ? "fa fa-3x fa-link" : "fa fa-3x fa-github"}></i> Check it out!
                </a>
              </figure>
              <div class="dimension-label" aria-live="polite" aria-label="Current box height" data-orientation="vertical">
                <span data-element="height-label"></span>
              </div>
            </div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="row">
          
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Favourite Projects (Click for description).</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves s-bgrid-thirds cf"
              >
                {projects.map((projects, i) => (
                  <div key={id++} className="columns portfolio-item">
                  <div className="item-wrap">
                    <img src={"./images/portfolio/" + projects.image} alt={projects.title} onClick={() => {window.screen.width >= 1280 && this.setState({isOpen: true, currImg: i})}} />
                    <div style={{ textAlign: "center" }}>{projects.title}</div>
                  </div>
                </div>
                ))}
              
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default Portfolio;
