// src/App.js
import React from 'react';
import Header from './component/Header/Header';
// import Hero from './component/Hero/Hero';
// import Features from './component/Features/Features';
import CarTypes from './component/CarTypes/CarTypes'; // Restored import
import WhyChoose from './component/WhyChoose/WhyChoose';
import Testimonials from './component/Testimonials/Testimonials';
// import BookingForm from './component/BookingForm/'; // Import BookingForm
import Footer from './component/Footer/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      {/* <Features /> */}
      <CarTypes />
      <WhyChoose />
      {/* <BookingForm /> Add BookingForm here */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
