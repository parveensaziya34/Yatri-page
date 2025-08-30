import React from 'react';
import './CarTypes.css';

const CarTypes = () => {
    return (
        <section className="car-types-section">
            <div className="container">

                {/* ---------------- CAR TYPES SECTION ---------------- */}
                <div className="car-types-container">
                    {/* CAR TYPE Box */}
                    <div className="car-type-box">
                        <div className="header-box green-header">
                            <h3>CAR TYPE</h3>
                        </div>
                        <div className="content-box">
                            <p>AC Sedans</p>
                            <p>AC Hatchbacks</p>
                            <p>AC SUV</p>
                        </div>
                    </div>

                    {/* MODEL INCLUDES Box */}
                    <div className="car-type-box">
                        <div className="header-box green-header">
                            <h3>MODEL INCLUDES</h3>
                        </div>
                        <div className="content-box">
                            <p>Etios, Amaze, Dzire etc.</p>
                            <p>Wagon R, Celerio, Micra</p>
                            <p>Ertiga, Xylo etc.</p>
                        </div>
                    </div>

                    {/* PASSENGERS Box */}
                    <div className="car-type-box">
                        <div className="header-box green-header">
                            <h3>PASSENGERS</h3>
                        </div>
                        <div className="content-box">
                            <p>4 Pax</p>
                            <p>4 Pax</p>
                            <p>6-7 Pax</p>
                        </div>
                    </div>

                    {/* IDEAL FOR Box */}
                    <div className="car-type-box">
                        <div className="header-box green-header">
                            <h3>IDEAL FOR</h3>
                        </div>
                        <div className="content-box">
                            <p>Comfortable trips with small families</p>
                            <p>Budget trips over short distances</p>
                            <p>Premium trips with large families</p>
                        </div>
                    </div>

                    {/* FARE Box */}
                    <div className="car-type-box">
                        <div className="header-box green-header">
                            <h3>FARE</h3>
                        </div>
                        <div className="content-box">
                            <p>Rs.11/KM</p>
                            <p>Rs.11/KM</p>
                            <p>Rs.13/KM</p>
                        </div>
                    </div>
                </div>

               
                {/* ---------------- WHY CHOOSE SECTION ---------------- */}
                <section className="why-choose-section">
                    <div className="why-choose-content">
                        <div className="why-choose-text">
                            <h3 className="why-choose-title">
                                WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span className="green-text">ONE-WAY JOURNEY</span>?
                            </h3>
                            <p className="why-choose-description">
                                Our Oneway Car Rental Service is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We Offer Outstation Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.
                            </p>
                        </div>
                        <div className="why-choose-image">
                            <img src="\image-processing20200705-14536-p3d6n5-1.png" alt="Yatri one-way cab service illustration" />
                        </div>
                    </div>
                </section>

                {/* ---------------- CAR RENTAL BENEFITS SECTION ---------------- */}
                <section className="car-rental-benefits">
                    <div className="benefits-header green-header">
                        <h3>CAR RENTAL IN INDIA - BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</h3>
                    </div>
                    <div className="benefits-content">
                        <p>
                            Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:
                        </p>
                        <ul>
                            <li>
                                <strong>1. Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience.
                            </li>
                            <li>
                                <strong>2. Dedicated Oneway Cab Service:</strong> We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.
                            </li>
                            <li>
                                <strong>3. Well-Maintained Car Rental Fleet:</strong> Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride whether you opt for a car hire, taxi service, or outstation car rental.
                            </li>
                            <li>
                                <strong>4. Transparent Pricing for Car Hire:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.
                            </li>
                            <li>
                                <strong>5. 24/7 Customer Support for Car Rentals:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CarTypes;
