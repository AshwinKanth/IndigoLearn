import "./index.css";

import Popup from "reactjs-popup";

import { Component } from "react";
import "./index.css";

const CurrentQualification = [
  {
    Qualification: "BCom",
    id: 1,
  },
  {
    Qualification: "CA",
    id: 2,
  },
  {
    Qualification: "CS",
    id: 3,
  },
  {
    Qualification: "CMA",
    id: 4,
  },
  {
    Qualification: "Other",
    id: 5,
  },
];

const interestedIn = [
  {
    interested: "ACCA level I",
    id: 1,
  },
  {
    interested: "ACCA level II",
    id: 2,
  },
  {
    interested: "ACCA level III",
    id: 3,
  },
];

class RequestForm extends Component {
  render() {
    return (
      <div className="popup-container">
        <h1 className="form-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <div className="input-container">
          <input type="number" className="input" placeholder="Phone Number*" />
          <input type="email" className="input" placeholder="Email ID*" />
          <select className="input">
            <option value="" disabled selected>
              Current Qualification
            </option>
            {CurrentQualification.map((each) => (
              <option value={each.id} key={each.id} className="option">
                {each.Qualification}
              </option>
            ))}
          </select>
          <select className="input">
            <option value="" disabled selected>
              Interested in
            </option>
            {interestedIn.map((each) => (
              <option value={each.id} key={each.id}>
                {each.interested}
              </option>
            ))}
          </select>
        </div>
        <Popup
          trigger={
            <button className="trigger-button" type="button">
              Request Call Back
            </button>
          }
        >
          {(close) => (
            <div className="modal-container">
              <div className="success-container">
                <p>Thank you! We will get in touch with you soon.</p>
              </div>
              <button
                type="button"
                className="closeButton"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}
export default RequestForm;
