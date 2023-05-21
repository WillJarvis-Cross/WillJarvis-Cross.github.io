import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  state = {isOpen: false, currImg: 0}
  add = (imgIndex) => {
    this.setState({
      isOpen: true,
      currImg: imgIndex ? imgIndex : 0
    })
  }

  render() {
    if (!this.props.data) return null;
    const projects = this.props.data.projects
    console.log(projects[this.state.currImg].image)
    ;

    return (
      <section id="portfolio">
        {this.state.isOpen && (
          <div className="popup-modal">
            <div class="box-layout">
              <div class="dimension-label" aria-live="polite" aria-label="Current box width">
                <span data-element="width-label"></span>
              </div>
              <div></div>
              <figure class="box-demo box" data-element="parent-box">
              <img src={"./images/portfolio/" + projects[this.state.currImg].image} alt={projects[this.state.currImg].title} />
                <figcaption contenteditable>
                  You can edit this text to see how it changes the layout of our box,
                  depending on intrinsic and extrinsic sizing.
                </figcaption>
              </figure>
              <div class="dimension-label" aria-live="polite" aria-label="Current box height" data-orientation="vertical">
                <span data-element="height-label"></span>
              </div>
            </div>
          </div>
        )}
        <Fade left duration={1000} distance="40px">
          <div className="row">
          
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Favourite Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves s-bgrid-thirds cf"
              >
                {projects.map((projects, i) => (
                  <div key={id++} className="columns portfolio-item">
                  <div className="item-wrap">
                    <img src={"./images/portfolio/" + projects.image} alt={projects.title} onClick={() => {this.add(2)}} />
                    <div style={{ textAlign: "center" }}>{projects.title}</div>
                  </div>
                </div>
                ))}
              
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
