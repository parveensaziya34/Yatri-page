import React from 'react';
import { FaCheck } from 'react-icons/fa';
// import { FaCar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // icons for cards
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="why-container">

      {/* ✅ Why Choose Section sabse upar */}
      <div className="why-container-original">
        <div className="why-header">
          <h2><span className="green">WHY CHOOSE ONE WAY CAB ?</span></h2>
        </div>
        <div className="why-box">
          <div className="why-content">
            <div className="why-left">
              <ul className="why-features">
                <li><FaCheck /> Instant Booking & Confirmation</li>
                <li><FaCheck /> Confirmed Booking Immediately</li>
                <li><FaCheck /> No Return Fare For One-Way Trip</li>
                <li><FaCheck /> Clean & Professional Cab Services</li>
                <li><FaCheck /> Transparent Billing With GPS Based Billing System</li>
              </ul>
            </div>
            <div className="why-center">
              <img src="/car.png" alt="One Way Cab" />
            </div>
            <div className="why-right">
              <ul className="why-features">
                <li><FaCheck /> Pick-up From Your House</li>
                <li><FaCheck /> Dedicated Cab Just For You</li>
                <li><FaCheck /> Drop To Your Desired Destination</li>
                <li><FaCheck /> Completed More Than 20,000+ Oneway Trips</li>
                <li><FaCheck /> Multiple Payment Option Including Credit Card</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

       <div className="travel-text">
      DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS{" "}
      <span>INTERCITY CAR RENTAL</span> IN INDIA – WHERE EXCELLENCE MEETS
      AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
    </div>

      {/* Header Section */}
      <div className="header">
        EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME
      </div>

      {/* Content Section */}
      <div className="content">
        <ul>
           <li>Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable For Everyone.</li>
              <li>Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We're Here To Take You Wherever Your Heart Desires With Our Luxury Car Rental Services.</li>
              <li>We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories Through Our Rent A Car Service.</li>
              <li>No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With Our Taxi Service.</li>
              <li>Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <b>7860663399</b> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies The Process, Ensuring A Hassle-Free Experience When You Rent A Car.</li>
              <li>Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India’s Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We're Dedicated To Ensuring You Have An Exceptional Road Trip.</li>
        </ul>
      </div>

      {/* Grid Section */}
      <div className="grid">
        <div className="grid-item">
          <img src="/bot2.png" alt="Budget Icon" />
          <h2>For Any Budget</h2>
<p>Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride Within Your Budget And At Your Convenience With Our Car Rental And Cab Service Options.</p>
        </div>
        <div className="grid-item">
          <img src="/bot3.png" alt="Distance Icon" />
          <h2>For Any Distance</h2>
          <p>Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking For All Your Travel Needs.</p>
        </div>
        <div className="grid-item">
          <img src="/bot4.png" alt="Duration Icon" />
          <h2>For Any Duration</h2>
<p>Plan A Day Out With Our Hourly Packages For Local City Tours Or Car Rental Services With A Driver Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation To Your Car Hire Needs.</p>
        </div>
      </div>

      {/* Why Choose Yatri Car Rental Header */}
      <div className="header yatri-header">WHY CHOOSE YATRI CAR RENTAL?</div>

      {/* Why Choose Yatri Car Rental Content */}
      <div className="content">
        <ul>
         <li>Yatri Car Rental Has Been A Trusted Digital Platform For Booking Local And Outstation Car Rental And Taxi Services Since 2014. Our Primary Goal Is To Offer Our Clients An Exceptional Car Rental And Cab Booking Experience, And We Take Great Pride In Our Commitment To Safety, Reliability, And Experienced Drivers. These Qualities Are Evident Across All Our Car Rental Services, Making Us The Preferred Choice For Those Seeking Rental Cars And Taxi Services In INDIA.</li>
              <li>Service You Can Trust - At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won't Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained To Ensure A Seamless And Stress-Free Journey For Our Clients.</li>
              <li>Safety Is Our Priority - Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of The City's Roads And Traffic Regulations. Our Drivers Are Committed To Delivering Excellent Customer Service And Ensuring A Comfortable And Stress-Free Travel Experience For Passengers.</li>
              <li>Expert Chauffeurs At Your Service - Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience And Satisfaction Of Our Clients.</li>
              <li>Extensive Industry Experience - With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.</li>
              <li>Proven Track Record - We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless And Satisfactory Experience For Our Customers. Our Commitment To Customer Comfort And Satisfaction Is Evident In Our Outstanding Google Ratings, Where We Consistently Receive Ratings Of 4.8 Stars Or Higher.</li>

        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
