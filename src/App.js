import React from 'react';
import './App.css';

import Navbar from './component/Navbar';
import Form from './component/EstimatorForm';
import ImpactCases from './component/ImpactCases';
import SevereImpactCases from './component/SevereImpactCases';

function App() {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: '100vh' }}
    >
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-5 border-dark">
              <div className="card-header bg-dark text-white text-center font-weight-bold text-uppercase">
                estimator form
              </div>
              <div className="card-body">
                <Form />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-info text-white mb-5">
              <div className="card-header bg-info text-center font-weight-bold text-uppercase">
                impact cases
              </div>
              <div className="card-body">
                <ImpactCases />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-danger text-white mb-5">
              <div className="card-header bg-danger text-center font-weight-bold text-uppercase">
                severe impact cases
              </div>
              <div className="card-body">
                <SevereImpactCases />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-dark text-white d-flex justify-content-center align-items-center"
        style={{ height: '50px' }}
      >
        made with luv by @iambenbright
      </div>
    </div>
  );
}

export default App;
