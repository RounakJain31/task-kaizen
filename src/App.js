import React from 'react';
import './App.css';
import CaseReviewCard from './components/CaseReviewCard/CaseReviewCard';
import MesotheliomaInfoCard from './components/MesotheliomaInfoCard/MesotheliomaInfoCard';
import ClaimForm from './components/ClaimForm/ClaimForm';

function App() {
  return (
    <div className="app-container">
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