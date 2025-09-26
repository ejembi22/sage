import { useState } from "react";
import PaymentSuccessful from "./PaymentSuccessful";
import courseimg from '../../assets/images/operationsimg1.jpg'

export function CheckOutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phoneNumber: "",
    billingAddress: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const requiredFields = ['fullName', 'email', 'country', 'phoneNumber', 'billingAddress'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (isFormValid) {
      setShowModal(true);
      // Clear the form after successful payment
      setFormData({
        fullName: "",
        email: "",
        country: "",
        phoneNumber: "",
        billingAddress: "",
      });
    } else {
      alert('Please fill in all required fields before proceeding with payment.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>

      <div className="checkout-content">
        <div className="billing-section">
          <h2 className="section-title">Billing Information</h2>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                className="form-input"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-input"
                placeholder="Select your country"
                value={formData.country}
                onChange={handleInputChange}
                autoComplete="country"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="billingAddress">
                Billing Address
              </label>
              <textarea
                id="billingAddress"
                name="billingAddress"
                className="form-input"
                placeholder="Enter your billing address"
                value={formData.billingAddress}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>

            <div className="note">
              {" "}
              <div className="note-text">
                {" "}
                <span className="note-label">Note:</span> Ensure your Full Name
                matches what would appear on your certificate at the end of the
                course
              </div>
            </div>
          </form>
        </div>

        <div className="summary-section">
          <h3 className="section-title">Summary</h3>
          <div className="price-row">
            <span className="price-label">Original Price:</span>
            <span className="price-value">₦13,500</span>
          </div>

          <div className="price-row total">
            <span className="price-label">Total:</span>
            <span className="price-value">₦13,500</span>
          </div>

          <div className="order-details">
            <h4 className="order-title">Order Details</h4>

            <div className="course-item">
              <div className="course-image">
                <img src={courseimg} alt="Course" />
                <span className="course-title">
                  Operations Management: Important of management and guide to
                  understanding the process.
              
              </span>
              </div>
              
                
              <div className="course-price">₦13,500</div>
            </div>
          </div>
          <button type="button" className="pay-button" onClick={handlePayNow}>
            Pay now
          </button>
        </div>
      </div>
      <PaymentSuccessful isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default CheckOutPage;
