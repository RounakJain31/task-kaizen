import React, { useState } from 'react';
import './ClaimForm.css';

function ClaimForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dob: '',
    jobTitle: '',
    diagnosisDate: '',
    diagnosisType: '',
    story: '',
    agreeToPolicy: false,
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
    console.log('Form Data Submitted:', formData);
    // Here you would typically send data to a backend or an API
    alert('Claim submitted! (Check console for data)');
  };

  return (
    <div className="claim-form-container">
      <h2>Claim Form </h2>
      <form onSubmit={handleSubmit} className="claim-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name [cite: 11, 43]</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number [cite: 12, 44]</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID [cite: 12, 45]</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of birth [cite: 13, 46]</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title [cite: 13, 48]</label>
            <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="diagnosisDate">Date of Diagnosis [cite: 14, 49]</label>
            <input type="date" id="diagnosisDate" name="diagnosisDate" value={formData.diagnosisDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="diagnosisType">Type of Diagnosis [cite: 15, 50]</label>
            <input type="text" id="diagnosisType" name="diagnosisType" value={formData.diagnosisType} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="story">Tell us your story (optional) </label>
          <textarea id="story" name="story" rows="5" value={formData.story} onChange={handleChange}></textarea>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="agreeToPolicy" name="agreeToPolicy" checked={formData.agreeToPolicy} onChange={handleChange} required />
          <label htmlFor="agreeToPolicy">
            I agree to the privacy policy and disclaimer and give my explicit
            consent to be contacted regarding my case. 
          </label>
        </div>
        <p className="privacy-note">My consent does not require purchase.</p>

        <button type="submit" className="submit-button">Start your claim now </button>
      </form>
    </div>
  );
}

export default ClaimForm;