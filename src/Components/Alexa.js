import React, { Component } from "react";
import "./Alexa.css";

class Alexa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noCount: 0,
      accepted: false
    };
    this.floatingHearts = [];
  }

  componentDidMount() {
    this.createFloatingHearts();
  }

  createFloatingHearts = () => {
    // Create floating hearts for background animation
    const heartCount = 20;
    this.floatingHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 30
    }));
    this.forceUpdate();
  };

  handleYes = () => {
    this.setState({ accepted: true });
  };

  handleNo = () => {
    this.setState({ noCount: this.state.noCount + 1 });
  };

  getNoButtonSize = () => {
    const { noCount } = this.state;
    if (noCount === 0) return 100; // 100% initial size
    if (noCount === 1) return 75;  // 75%
    if (noCount === 2) return 50;  // 50%
    if (noCount === 3) return 25;  // 25%
    return 0; // Hidden after 4 clicks
  };

  getQuestion = () => {
    const { noCount } = this.state;
    if (noCount === 0) return "Will you be my Valentine?";
    if (noCount === 1) return "Please?";
    if (noCount === 2) return "Pretty please?";
    if (noCount === 3) return "Pretty please with a cherry on top?";
    return "Will you be my Valentine?";
  };

  render() {
    const { accepted } = this.state;
    const noButtonSize = this.getNoButtonSize();
    const showNoButton = noButtonSize > 0;

    // Personal pictures - add your images to /public/images/alexa/
    // Name them: photo1.jpg, photo2.jpg, photo3.jpg, etc.
    const photos = [
      '/images/alexa/photo1.jpg',
      '/images/alexa/photo2.jpg',
      '/images/alexa/photo3.jpg'
    ].filter(photo => {
      // Only include photos that exist (you can add more)
      return true;
    });

    if (accepted) {
      return (
        <div className="alexa-container accepted-page">
          <div className="floating-hearts-container">
            {this.floatingHearts.map(heart => (
              <span
                key={heart.id}
                className="floating-heart"
                style={{
                  left: `${heart.left}%`,
                  animationDelay: `${heart.delay}s`,
                  animationDuration: `${heart.duration}s`,
                  fontSize: `${heart.size}px`
                }}
              >
                💖
              </span>
            ))}
          </div>
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 5)]
              }}></div>
            ))}
          </div>
          <div className="alexa-content accepted">
            <h1 className="celebration">🎉 Yay! 🎉</h1>
            <h2>You've made me the happiest person in the world!</h2>
            <div className="hearts-row">
              <span className="heart-emoji">💕</span>
              <span className="heart-emoji">💖</span>
              <span className="heart-emoji">💗</span>
              <span className="heart-emoji">💝</span>
              <span className="heart-emoji">💘</span>
              <span className="heart-emoji">💓</span>
              <span className="heart-emoji">💞</span>
            </div>
            {photos.length > 0 && (
              <div className="photos-container">
                <h3>Some of my favorite memories with you 💕</h3>
                <div className="photos-grid">
                  {photos.map((photo, index) => (
                    <div key={index} className="photo-wrapper">
                      <img 
                        src={photo} 
                        alt={`Memory ${index + 1}`}
                        className="memory-photo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="heart-large">💕</p>
          </div>
        </div>
      );
    }

    return (
      <div className="alexa-container">
        <div className="floating-hearts-container">
          {this.floatingHearts.map(heart => (
            <span
              key={heart.id}
              className="floating-heart"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`
              }}
            >
              {['💖', '💕', '💗', '💝', '💘'][Math.floor(Math.random() * 5)]}
            </span>
          ))}
        </div>
        <div className="alexa-content">
          <div className="hearts-decoration">
            <span className="heart-small">💕</span>
            <span className="heart-small">💖</span>
            <span className="heart-small">💗</span>
          </div>
          <h1 className="question">{this.getQuestion()}</h1>
          <div className="hearts-decoration">
            <span className="heart-small">💝</span>
            <span className="heart-small">💘</span>
            <span className="heart-small">💓</span>
          </div>
          <div className="button-container">
            <button 
              className="yes-button" 
              onClick={this.handleYes}
            >
              <span className="button-heart">💕</span> Yes <span className="button-heart">💕</span>
            </button>
            {showNoButton && (
              <button 
                className="no-button" 
                onClick={this.handleNo}
                style={{ 
                  transform: `scale(${noButtonSize / 100})`,
                  opacity: noButtonSize < 25 ? 0.5 : 1
                }}
              >
                No
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Alexa;
