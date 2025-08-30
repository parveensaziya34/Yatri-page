import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!",
      name: "Vikram Kulkarni",
      location: "Kanpur, Uttar Pradesh"
    },
    {
      stars: 5,
      text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!",
      name: "Rajesh Kumawat",
      location: "Jaipur, Uttar Pradesh"
    },
    {
      stars: 5,
      text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.",
      name: "Anjali Mishra",
      location: "Gorakhpur, Uttar Pradesh"
    },
    {
      stars: 5,
      text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs deliver exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They're my go-to for intercity travel now.",
      name: "Siddharth Vaidya",
      location: "Kanpur, Delhi"
    }
  ];

  const cities = [
    "Lucknow", 
    "Ayodhya", 
    "Gorakhpur", 
    "Varanasi", 
    "Allahabad (Prayagraj)", 
    "Kanpur"
  ];

  const StarRating = ({ count }) => (
    <div className="stars">
      {[...Array(count)].map((_, index) => (
        <span key={index} className="star">★</span>
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial, index }) => (
    <div key={index} className="testimonial-card">
      <StarRating count={testimonial.stars} />
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="customer-info">
        <div className="customer-name">{testimonial.name}</div>
        <div className="customer-location">{testimonial.location}</div>
      </div>
    </div>
  );

  const handleGooglePlayDownload = () => {
    console.log("Google Play Store download clicked");
  };

  const handleAppStoreDownload = () => {
    console.log("App Store download clicked");
  };

  const handlePartnerSignup = () => {
    console.log("Driver partner signup clicked");
  };

  return (
    <div className="yatri-landing">
      {/* Customer Testimonials Section */}
      <section className="testimonials-section">
        <h1 className="testimonials-title">Customer Testimonials</h1>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-container">

          {/* ✅ Phone + Promo + Partner ek row me */}
          <div className="app-section">
            
            {/* Phone Image */}
            <div className="phone-mockup">
              <img 
                src="/mobile.png"
                alt="Yatri Cabs App Preview"
                className="phone-image"
              />
            </div>

            {/* Promo + Partner wrapper */}
            <div className="inline-wrapper">

              {/* Promo Section */}
              <div className="app-info">
                <h2>
                  GET YOUR<br/> <span className="highlight">YATRI CABS</span><br />
                  APP NOW!
                </h2>
                  
                <div className="promo-code">
                  <p>USE CODE <span className="code-highlight">WELCOMEYATRI</span> AND</p>
                  <p>GET <span className="code-highlight">FLAT 25% OFF*</span> ON YOUR FIRST</p>
                  <p>INTERCITY RIDE</p>
                </div>
                  
                <div className="download-section">
                  <div className="download-title">Download Now!</div>
                  <div className="download-buttons">
                    <button 
                      onClick={handleGooglePlayDownload} 
                      className="download-btn"
                    >
                      <img 
                        src="/google.png" 
                        alt="Get it on Google Play" 
                        className="store-icon"
                      />
                    </button>

                    <button 
                      onClick={handleAppStoreDownload} 
                      className="download-btn"
                    >
                      <img 
                        src="/app.png" 
                        alt="Download on the App Store" 
                        className="store-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divider-vertical"></div>

              {/* Partner Section */}
              <div className="partner-section">
                <h2>
                  BECOME A <span className="highlight">DRIVER</span> PARTNER
                </h2>
                <p className="partner-description">
                  Join <span className="rental">Yatri Car Rental</span> And Attach Your Car To Our Platform. 
                  Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.
                </p>
                <button 
                  onClick={handlePartnerSignup} 
                  className="partner-btn"
                >
                  DOWNLOAD THE APP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Cities Section */}
      <section className="cities-section">
        <div className="cities-container">
          <h3 className="cities-title">Operational Cities :</h3>
          <div className="cities-list">
            {cities.map((city, index) => (
              <a 
                key={index} 
                href={`/${city.toLowerCase()}/car-rental`} 
                className="city"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`${city} city clicked`);
                }}
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
