import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      population: '',
      timeToElapse: '',
      reportedCases: '',
      totalHospitalBeds: '',
      periodType: '',
    },
    onSubmit: values => {
      // submit input data to estimator handler
      // at the backened for extra validation and
      // store in database
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="population">Population</label>
        <input
          name="population"
          id="population"
          className="form-control"
          {...formik.getFieldProps('population')}
          data-population
        />
      </div>
      <div className="form-group">
        <label htmlFor="timeToElapse">Time To Elapse</label>
        <input
          name="timeToElapse"
          id="timeToElapse"
          className="form-control"
          {...formik.getFieldProps('timeToElapse')}
          data-time-to-elapse
        />
      </div>
      <div className="form-group">
        <label htmlFor="reportedCases">Reported Cases</label>
        <input
          name="reportedCases"
          id="reportedCases"
          className="form-control"
          {...formik.getFieldProps('reportedCases')}
          data-reported-cases
        />
      </div>
      <div className="form-group">
        <label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
        <input
          name="totalHospitalBeds"
          id="totalHospitalBeds"
          className="form-control"
          {...formik.getFieldProps('totalHospitalBeds')}
          data-total-hospital-beds
        />
      </div>
      <div className="form-group">
        <label htmlFor="periodType">Period Type</label>
        <select
          className="form-control"
          id="periodType"
          name="periodType"
          data-period-type
          {...formik.getFieldProps('periodType')}
        >
          <option value="days">days</option>
          <option value="weeks">weeks</option>
          <option value="months">months</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-dark"
        style={{ width: '100%' }}
        data-go-estimate
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
