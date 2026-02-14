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
    if (noCount === 0) return `Hey Alexa, "will" you be my Valentine?`;
    if (noCount === 1) return "Please?";
    if (noCount === 2) return "Pretty please?";
    if (noCount === 3) return "Pretty please with a cherry on top?";
    return "Just say yes";
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

  // Custom descriptions for each photo - update these with your own descriptions!
  getCustomDescriptions = () => {
    return {
      '6_month.JPG': '6 Month Photoshoot',
      'big_smile.JPG': '',
      'both_drawings.JPG': 'Sorry my drawing skills are not that good',
      'christmas_drink.JPG': 'You look sooo good',
      'christmas_market.JPG': 'Distillery District in the rain',
      'drawing_of_alexa.JPG': 'Please forgive me',
      'drawing_of_will.JPG': 'This is so good',
      'first_pic.JPG': 'We were so young',
      'halloween_costume.HEIC': 'Cute',
      'halloween.JPG': '',
      'holding_hands.JPG': '',
      'hug.HEIC': '',
      'nature_walk.JPG': 'I miss this weather. Also, this is a great picture.',
      'olivia_party.JPG': '',
      'pic.JPG': 'You Look Great.',
      'pumpkins.JPG': '',
      'roller_blade.HEIC': 'Surprised We Didn\'t Die',
      'skating_prep.JPG': 'We need to go skating again',
      'snow.HEIC': 'What an amazing Day',
      'snowman_2.HEIC': 'We never named this snowman',
      'snowman.HEIC': 'Cute',
      'spadina_mirror.JPG': '',
      'doku.JPG': 'Best Girlfriend Award',
      'stand_mixer.JPG': 'Best Boyfriend Award'
    };
  };

  // Custom dates for each photo - update these with your own dates!
  getCustomDates = () => {
    return {
      '6_month.JPG': 'January 2026',
      'big_smile.JPG': 'December 2025',
      'both_drawings.JPG': 'January 2026',
      'christmas_drink.JPG': 'December 2025',
      'christmas_market.JPG': 'November 2025',
      'drawing_of_alexa.JPG': 'January 2026',
      'drawing_of_will.JPG': 'January 2026',
      'first_pic.JPG': 'October 2025',
      'halloween_costume.HEIC': 'October 2025',
      'halloween.JPG': 'October 2025',
      'holding_hands.JPG': 'November 2025',
      'hug.HEIC': 'December 2025',
      'nature_walk.JPG': 'October 2025',
      'olivia_party.JPG': 'November 2025',
      'pic.JPG': 'December 2025',
      'pumpkins.JPG': 'October 2025',
      'roller_blade.HEIC': 'January 2026',
      'skating_prep.JPG': 'December 2025',
      'snow.HEIC': 'January 2026',
      'snowman_2.HEIC': 'January 2026',
      'snowman.HEIC': 'January 2026',
      'spadina_mirror.JPG': 'December 2025',
      'doku.JPG': 'December 2025',
      'stand_mixer.JPG': 'December 2025'
    };
  };

  // Photos that should use contain instead of cover to avoid cropping heads
  // Add filenames here for photos where heads get cut off
  getPhotosToContain = () => {
    return [
      'pic.JPG', 'skating_prep.JPG', 'olivia_party.JPG', 'hug.HEIC'
    ];
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
      'doku.JPG',
      'stand_mixer.JPG'
    ];

    // Get custom descriptions and dates
    const customDescriptions = this.getCustomDescriptions();
    const customDates = this.getCustomDates();
    const photosToContain = this.getPhotosToContain();
    
    // Generate gallery photos - use custom description/date if provided, otherwise auto-generate
    const galleryPhotos = allImageFiles.map(filename => {
      const customDesc = customDescriptions[filename];
      const customDate = customDates[filename];
      const useContain = photosToContain.includes(filename);
      return {
        image: `/images/alexa/${filename}`,
        description: customDesc || this.generateDescriptionFromFilename(filename),
        date: customDate || '',
        useContain: useContain
      };
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
          
          {/* Centered Celebration Section */}
          <div className="celebration-wrapper">
            <div className="alexa-content accepted">
              <h1 className="celebration">🎉 Will and Alexa's Best Moments (A&W) 🎉</h1>
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
            </div>
            
            <div className="memories-gallery">
              {galleryPhotos.map((item, index) => (
                <div key={index} className="memory-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="memory-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.description}
                      className={`memory-image ${item.useContain ? 'memory-image-contain' : ''}`}
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
