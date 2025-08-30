// components/Hero/Hero.js
import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './Hero.css';

const Hero = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>INDIA'S LEADING ONE WAY INTERCEPT CAB SERVICE PROVIDER</h1>
          <div className="hero-feature">
            <h3>Transparent Billing</h3>
            <p>GPS Based Billing | No Km Tampering</p>
          </div>
          
          <div className="hero-tagline">
            <h2>RETURN FARE, NOT FAIR!</h2>
            <p>Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.</p>
          </div>
          
          <div className="contact-info">
            <p>24/7 Customer Support: <strong>+917860663399</strong></p>
          </div>
          
          <button className="btn book-now-btn" onClick={() => setShowBookingForm(!showBookingForm)}>
            Book Now
          </button>
          
          {showBookingForm && <BookingForm />}
          
          <div className="app-download">
            <h3>Download Now!</h3>
            <div className="download-buttons">
              <button className="download-btn google-play">GET IT ON Google Play</button>
              <button className="download-btn app-store">Download on the App Store</button>
            </div>
          </div>
          
          <div className="routes-info">
            <p>NOW AVAILABLE ROUTES ARE!</p>
            <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;