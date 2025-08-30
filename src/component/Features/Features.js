// components/Features/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title">WHY YATRI?</h2>
        
        <div className="features-grid">
          <div className="feature-item">
            <h3>FAST RESPONSE TIME</h3>
            <p>Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.</p>
          </div>
          
          <div className="feature-item">
            <h3>VAST FLEET</h3>
            <p>We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.</p>
          </div>
          
          <div className="feature-item">
            <h3>EASY TO ORDER</h3>
            <p>Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.</p>
          </div>
          
          <div className="feature-item">
            <h3>GREAT TARIFFS</h3>
            <p>Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;