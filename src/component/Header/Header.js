import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import {
  setTripType,
  setActiveTab,
  setFormData,
  addDestination,
  removeDestination,
} from "../../redux/reducers/bookingSlice";

import './Header.css';

// "INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES" section
const PremierServicesSection = () => (
  <section className="premier-services-section">
    <div className="container">
      <h2 className="section-title2">
        INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES
      </h2>
      <p className="section-description">
        At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service,
        Delivering Reliable And Premium Intercity <br />And Local Taxi Services. With Over A Decade Of
        Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-<br />Driven
        One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country
      </p>
    </div>
  </section>
);

// "Billing Info" section
const BillingInfoSection = () => (
  <section className="billing-info-section">
    <div className="billing-item">
      <img src="/hand.png" alt="Return Fare Icon" className="billing-icon" />
      <h3>RETURN FARE, NOT FAIR!</h3>
      <p>
        Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round
        Trip Cost For Your One Way Travel.
      </p>
    </div>
    <div className="divider"></div>
    <div className="billing-item">
      <img src="/location.png" alt="GPS Billing Icon" className="billing-icon" />
      <h3>GPS BASED BILLING SYSTEM</h3>
      <p>
        Since The GPS Data Captures The Actual Distance And Time Travelled, It Reduces The Chance Of Kilometer Tampering
        Or Discrepancies In Billing.
      </p>
    </div>
    <div className="divider"></div>
    <div className="billing-item">
      <img src="/bot.png" alt="Available Routes Icon" className="billing-icon" />
      <h3>NOW AVAILABLE ROUTES ARE!</h3>
      <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
    </div>
  </section>
);

// ================== MAIN WHY YATRI ==================
const WhyYatri = () => {
  const dispatch = useDispatch();
  const { tripType, activeTab, formData } = useSelector((state) => state.booking);

  const [cities, setCities] = useState([]);

  // Fetch cities from API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India" }),
        });
        const result = await response.json();
        if (!result.error && Array.isArray(result.data)) {
          setCities(result.data);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  const features = [
    {
      id: 1,
      title: "FAST RESPONSE TIME",
      description:
        "Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly",
      iconImage: '/traffic.png',
      useImage: true,
    },
    {
      id: 2,
      title: "VAST FLEET",
      description:
        "We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.",
      iconImage: '/vast-fleet-icon.png',
      useImage: true,
    },
    {
      id: 3,
      title: "EASY TO ORDER",
      description:
        "Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.",
      iconImage: '/note.png',
      useImage: true,
    },
    {
      id: 4,
      title: "GREAT TARIFFS",
      description:
        "Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.",
      iconImage: '/doller.png',
      useImage: true,
    },
  ];

  // ---------- handlers ----------
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'to') {
      const newTo = [...formData.to];
      newTo[index] = value;
      dispatch(setFormData({ ...formData, to: newTo }));
    } else {
      dispatch(setFormData({ ...formData, [name]: value }));
    }
  };

  const handleTripTypeChange = (e) => {
    dispatch(setTripType(e.target.value));
    if (e.target.value === 'One Way') {
      dispatch(setFormData({ ...formData, returnDate: '' }));
    }
  };

  const handleAddDestination = () => {
    dispatch(addDestination());
  };

  const handleRemoveDestination = (index) => {
    dispatch(removeDestination(index));
  };

  const handleTabClick = (tabName) => {
    dispatch(setActiveTab(tabName));
  };

  // One-Way trip form fields
  const OneWayForm = () => (
    <>
      <div className="form-row">
        <div className="form-field">
          <label>FROM</label>
          <select
            name="from"
            value={formData.from}
            onChange={handleInputChange}
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label>TO</label>
          <div className="input-with-icons">
            <select
              name="to"
              value={formData.to[0] || ''}
              onChange={(e) => handleInputChange(e, 0)}
            >
              <option value="">Select City</option>
              {cities.map((city, idx) => (
                <option key={idx} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field time-field">
          <label>Pickup Time</label>
          <div className="time-input-container">
            <i className="fa fa-clock-o"></i>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );

  // Round-Trip form fields
  const RoundTripForm = () => (
    <>
      <div className="form-row">
        <div className="form-field">
          <label>FROM</label>
          <select
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            //  style={border="none"}
            className='slect'
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>
        </div>
        {formData.to.map((destination, index) => (
          <div key={index} className="form-field">
            <label>TO</label>
            <div className="input-with-icons">
              <select
                name="to"
                value={destination}
                onChange={(e) => handleInputChange(e, index)}
                // style={border="none"}
                className='toslect'
              >
                <option value="">Select City</option>
                {cities.map((city, idx) => (
                  <option key={idx} value={city}>{city}</option>
                ))}
              </select>
              <div className="to-icons">
                <span className="plus-minus-icon" onClick={handleAddDestination}>
                  +
                </span>
                {formData.to.length > 1 && (
                  <span className="plus-minus-icon" onClick={() => handleRemoveDestination(index)}>
                    -
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
            disabled={tripType === 'One Way'}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field time-field">
          <label>Pickup Time</label>
          <div className="time-input-container">
            <i className="fa fa-clock-o"></i>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <div className="top-bar">
        <div className="logo-container">
          <img src="/image copy.png" alt="Yatri Cabs" className="logo" />
        </div>
        <div className="header1">
          <img src="/header.png" alt="Header Image" />
        </div>
        <div className="user-actions">
          <button className="download-app">
            <img src="/download1.png" alt="Download" />
            <span>Download App</span>
          </button>
          <div className="user-profile">
            <img src="/profil2.png" alt="User" />
            <span className="profile-text">Hi, Ravi</span>
          </div>
        </div>
      </div>

      <header className="main-header">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>
              INDIA'S <span style={{ color: '#45D203' }}>LEADING</span>
              <br />
              <span style={{ color: '#45D203' }}>ONE WAY INTERCITY</span>
              <br />
              CAB SERVICE PROVIDER
            </h1>
          </div>

          {/* Booking Form */}
          <div className="booking-form-container">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === 'Outstation' ? 'active' : ''}`}
                onClick={() => handleTabClick('Outstation')}
              >
                Outstation
              </button>
              <button
                className={`tab-button ${activeTab === 'Local' ? 'active' : ''}`}
                onClick={() => handleTabClick('Local')}
              >
                Local
              </button>
              <button
                className={`tab-button ${activeTab === 'Airport' ? 'active' : ''}`}
                onClick={() => handleTabClick('Airport')}
              >
                Airport
              </button>
            </div>

            <form className="booking-form">
              {/* Trip Type */}
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="One Way"
                    checked={tripType === 'One Way'}
                    onChange={handleTripTypeChange}
                  />
                  One Way
                </label>
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="Round Trip"
                    checked={tripType === 'Round Trip'}
                    onChange={handleTripTypeChange}
                  />
                  Round Trip
                </label>
              </div>

              {tripType === 'One Way' ? <OneWayForm /> : <RoundTripForm />}

              <button type="submit" className="explore-cabs-btn">
                EXPLORE CABS
              </button>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-item transparent-billing">
            <h4 style={{ fontSize: "30px", fontWeight: "600" }}>Transparent Billing</h4>
            <p>GPS Based Billing | No Km Tampering</p>
          </div>
          <div className="info-item download-now">
            <h4 style={{ fontSize: "30px", fontWeight: "600" }}>Download Now!</h4>
            <div className="app-stores">
              <img 
                src="/google.png" 
                alt="Google Play" 
                style={{ width: "120px", height: "40px", marginRight: "10px" }} 
              />
              <img 
                src="/app.png" 
                alt="App Store" 
                style={{ width: "120px", height: "40px" }} 
              />
            </div>
          </div>
          <div className="info-item no-return-fare">
            <h4 style={{ fontSize: "30px", fontWeight: "600" }}>No Return Fair</h4>
            <p>Oneway Cab Fare | No Hidden Charges</p>
          </div>
        </div>
      </header>

      <BillingInfoSection />
      <PremierServicesSection />

      {/* WHY YATRI FEATURES */}
      <div className="why-yatri-container5">
        <div className="section-header4">
          <h1 className="section-title">
            WHY <span className="yatri-highlight">YATRI</span> ?
          </h1>
        </div>

        <div className="main-content">
          <div className="car-section">
            <img
              src="/boy_car.png"
              alt="Yatri Car"
              style={{ width: '600px', height: '400px', objectFit: 'cover' }}
            />
            <img
              src="/image copy.png"
              alt="Green Overlay"
              style={{
                position: 'absolute',
                top: '50%',
                left: '32%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '100px',
                objectFit: 'contain',
              }}
            />
          </div>

          <div className="features-section">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon">
                  {feature.useImage ? (
                    <img
                      src={feature.iconImage}
                      alt={`${feature.title} Icon`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<span>⚠️</span>';
                      }}
                    />
                  ) : (
                    <span>⚠️</span>
                  )}
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyYatri;

