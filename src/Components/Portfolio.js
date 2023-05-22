import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  state = {isOpen: false, currImg: 0}
  add = (isOpen, imgIndex) => {
    this.setState({
      isOpen: isOpen,
      currImg: imgIndex ? imgIndex : this.state.currImg
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
          <div className="popup-modal" onClick={() => {this.add(false, undefined)}}>
            <i className="fa fa-4x exit fa-times"></i>
            <div class="box-layout">
              <div class="dimension-label" aria-live="polite" aria-label="Current box width">
                <span data-element="width-label"></span>
              </div>
              <div></div>
              <figure class="box-demo box" data-element="parent-box">
              {this.state.currImg === 0 ? (<iframe class="youtubeLink" src="https://www.youtube.com/embed/m7pxE1DswGo" title="Pokemon Game Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : 
              (<img src={"./images/portfolio/" + projects[this.state.currImg].image} alt={projects[this.state.currImg].title} />)}
                <figcaption contenteditable>
                  {projects[this.state.currImg].description}
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
                    <img src={"./images/portfolio/" + projects.image} alt={projects.title} onClick={() => {this.add(true, i)}} />
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
