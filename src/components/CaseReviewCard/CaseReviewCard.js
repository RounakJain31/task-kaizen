import React from 'react';
import './CaseReviewCard.css'; 

function CaseReviewCard() {
  return (
    <div className="case-review-card">
      <div className="header-text">
        We are here to help! [cite: 8, 34]
      </div>
      <div className="title-section">
        <h2 className="free-case-review-title">Free Case Review </h2>
        <div className="slots-left">ONLY 6 SLOTS LEFT [cite: 4, 9, 33, 35, 40]</div>
      </div>
      <ul className="features-list">
        <li>100% Confidential </li>
        <li>No Win, No Fee </li>
        <li>Free Case Evaluation </li>
      </ul>
      <button className="contact-us-button">Contact us </button>
    </div>
  );
}

export default CaseReviewCard;