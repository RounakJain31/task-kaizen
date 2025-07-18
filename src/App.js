import React from 'react';
import './App.css'; // For overall layout
import CaseReviewCard from './components/CaseReviewCard/CaseReviewCard';
import MesotheliomaInfoCard from './components/MesotheliomaInfoCard/MesotheliomaInfoCard';
import ClaimForm from './components/ClaimForm/ClaimForm';

function App() {
  return (
    <div className="app-container">
      {/* Potentially a header component here if needed */}
      <main className="main-content">
        <div className="cards-section">
          <CaseReviewCard />
          <MesotheliomaInfoCard />
        </div>
        <div className="form-section">
          <ClaimForm />
        </div>
      </main>
    </div>
  );
}

export default App;