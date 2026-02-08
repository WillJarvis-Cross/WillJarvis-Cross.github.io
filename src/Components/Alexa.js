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

  generateDescriptionFromFilename = (filename) => {
    // Remove file extension
    const name = filename.replace(/\.(JPG|jpg|HEIC|heic|PNG|png|JPEG|jpeg)$/i, '');
    // Replace underscores and hyphens with spaces
    let description = name.replace(/[_-]/g, ' ');
    // Capitalize first letter of each word
    description = description.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    // Add emojis based on keywords
    if (description.toLowerCase().includes('christmas')) description += ' ❄️';
    if (description.toLowerCase().includes('halloween')) description += ' 🎃';
    if (description.toLowerCase().includes('nature') || description.toLowerCase().includes('walk')) description += ' 🌿';
    if (description.toLowerCase().includes('snow') || description.toLowerCase().includes('snowman')) description += ' ⛄';
    if (description.toLowerCase().includes('smile') || description.toLowerCase().includes('hug')) description += ' 😊';
    if (description.toLowerCase().includes('drawing')) description += ' 🎨';
    if (description.toLowerCase().includes('skating') || description.toLowerCase().includes('roller')) description += ' ⛸️';
    if (description.toLowerCase().includes('hand')) description += ' 🤝';
    if (description.toLowerCase().includes('month')) description += ' 💕';
    if (description.toLowerCase().includes('party')) description += ' 🎉';
    if (description.toLowerCase().includes('pumpkin')) description += ' 🎃';
    
    return description;
  };

  render() {
    const { accepted } = this.state;
    const noButtonSize = this.getNoButtonSize();
    const showNoButton = noButtonSize > 0;

    // Personal pictures - add your images to /public/images/alexa/
    // Name them: photo1.jpg, photo2.jpg, photo3.jpg, etc.
    const photos = [
      '/images/alexa/christmas_market.JPG',
      '/images/alexa/halloween.JPG',
      '/images/alexa/nature_walk.JPG'
    ].filter(photo => {
      // Only include photos that exist (you can add more)
      return true;
    });

    // All photos from the alexa folder - descriptions auto-generated from filenames
    const allImageFiles = [
      '6_month.JPG',
      'big_smile.JPG',
      'both_drawings.JPG',
      'christmas_drink.JPG',
      'christmas_market.JPG',
      'doku.JPG',
      'drawing_of_alexa.JPG',
      'drawing_of_will.JPG',
      'first_pic.JPG',
      'halloween_costume.HEIC',
      'halloween.JPG',
      'holding_hands.JPG',
      'hug.HEIC',
      'nature_walk.JPG',
      'olivia_party.JPG',
      'pic.JPG',
      'pumpkins.JPG',
      'roller_blade.HEIC',
      'skating_prep.JPG',
      'snow.HEIC',
      'snowman_2.HEIC',
      'snowman.HEIC',
      'spadina_mirror.JPG',
      'stand_mixer.JPG'
    ];

    // Generate gallery photos with auto-generated descriptions
    const galleryPhotos = allImageFiles.map(filename => ({
      image: `/images/alexa/${filename}`,
      description: this.generateDescriptionFromFilename(filename),
      date: '' // You can update dates later
    }));

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
          
          {/* Centered Celebration Section */}
          <div className="celebration-wrapper">
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
          
          {/* Scrollable Gallery Section */}
          <div className="gallery-section">
            <div className="gallery-header">
              <h2 className="gallery-title">Our Beautiful Memories Together 💖</h2>
              <p className="gallery-subtitle">Scroll down to see more of our special moments</p>
              <div className="scroll-indicator">
                <span>👇</span>
              </div>
            </div>
            
            <div className="memories-gallery">
              {galleryPhotos.map((item, index) => (
                <div key={index} className="memory-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="memory-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.description}
                      className="memory-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="image-placeholder">💕</div>';
                      }}
                    />
                    <div className="memory-overlay">
                      <span className="memory-heart">💕</span>
                    </div>
                  </div>
                  <div className="memory-info">
                    <p className="memory-description">{item.description}</p>
                    <p className="memory-date">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="gallery-footer">
              <div className="hearts-row">
                <span className="heart-emoji">💕</span>
                <span className="heart-emoji">💖</span>
                <span className="heart-emoji">💗</span>
                <span className="heart-emoji">💝</span>
                <span className="heart-emoji">💘</span>
              </div>
              <p className="footer-message">Thank you for all the beautiful memories 💕</p>
            </div>
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
