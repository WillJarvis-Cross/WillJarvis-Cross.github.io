import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      
      let projectImage = "./images/portfolio/" + projects.image;
      //<Zmage alt={projects.title} src={projectImage} backdrop="url(images/portfolio/infinityDugeons.gif) no-repeat center fixed 0.5" />
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img src={projectImage} alt={projects.title} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Favourite Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves s-bgrid-thirds cf"
                
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
