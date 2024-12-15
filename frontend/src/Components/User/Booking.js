import React, { useState } from 'react';
import './Bookingstyles.css';

function Booking() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    travelDate: '',
    fullName: '',
    contactNumber: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-container">
      <div className="booking">
        <div className="booking__header">
          <h1>Booking</h1>
          <p>Book your appointment today!</p>
        </div>
        <form onSubmit={handleSubmit} className="booking__form">
          <div>
            <label>From:</label>
            <input
              type="text"
              name="from"
              placeholder="Enter starting location"
              value={formData.from}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>To:</label>
            <input
              type="text"
              name="to"
              placeholder="Enter destination"
              value={formData.to}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Travel Date:</label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email (optional)"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <h1>Payment Details</h1>
          <div>
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter your card number"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <div className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label>I agree to the Terms and Conditions.</label>
          </div>
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;