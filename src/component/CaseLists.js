import React from 'react';

function CasesList() {
  return (
    <ul className="list-group list-group-flush text-dark">
      <li className="list-group-item p-0 mb-4 border-bottom-0 d-flex justify-content-between">
        <p>Currently Infected</p>
        <p className="text-right mb-1 font-weight-bold">2324566</p>
      </li>
      <li className="list-group-item">
        <p className="font-weight-bold text-center m-0">
          Infections By Requested Time
        </p>
      </li>
      {/* TODO: generate data below dynamically from input data */}
      <li className="list-group-item p-0 mb-3 mt-4 d-flex justify-content-between">
        <p>Infections</p>
        <p className="text-right mb-1 font-weight-bold">5000</p>
      </li>
      <li className="list-group-item p-0 mb-3 d-flex justify-content-between">
        <p>Severe Cases</p>
        <p className="text-right mb-1 font-weight-bold">5000</p>
      </li>
      <li className="list-group-item p-0 mb-3 d-flex justify-content-between">
        <p>Hospital Beds</p>
        <p className="text-right mb-1 font-weight-bold">228899</p>
      </li>
      <li className="list-group-item p-0 mb-3 d-flex justify-content-between">
        <p>Cases For ICU</p>
        <p className="text-right mb-1 font-weight-bold">34355</p>
      </li>
      <li className="list-group-item p-0 mb-3 d-flex justify-content-between">
        <p>Cases For Ventilators</p>
        <p className="text-right mb-1 font-weight-bold">11230066</p>
      </li>
      <li className="list-group-item p-0 mb-3 d-flex justify-content-between">
        <p>Dollars In Flight</p>
        <p className="text-right mb-1 font-weight-bold">3342</p>
      </li>
    </ul>
  );
}

export default CasesList;
