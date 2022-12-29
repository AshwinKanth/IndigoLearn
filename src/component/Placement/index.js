import RequestForm from "../RequestForm";
import "./index.css";

const Placement = () => (
  <div className="placement-bg-container">
    <div className="placements-container">
      <div className="heading-container">
        <h1 className="heading">100% Placement Assistance</h1>
        <hr className="breakLine" />
      </div>
      <h1 className="placement-heading">Resume Building</h1>
      <p className="placement-description">
        1FIN provides professional guidance to help you create an effective
        resume to help you create a lasting impression.
      </p>
      <h1 className="placement-heading">Career Counselling</h1>
      <p className="placement-description">
        We provide career counselling to conducting mock interviews and aptitude
        tests – we will assist you at every step, all the way, we make you job
        ready
      </p>
      <h1 className="placement-heading">Jobs</h1>
      <p className="placement-description">
        We will give you an edge over others with our direct corporate
        affiliations which will ensure that you are placed right.
      </p>
    </div>
    <div className="placementBottom-container">
      <div className="left-container">
        <p className="placementBottom-heading">
          Kick off your ACCA Prep journey with IndigoLearn
        </p>
        <p className="placementBottom-description">
          Sign-in and get instant acccess to our FREE Courses
        </p>
        <img
          src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1672136259/acca_silver_lp_logo_innprj.png"
          alt="partner"
          className="partnerImage"
        />
      </div>
      <div className="requestForm-container">
        <RequestForm />
      </div>
    </div>
  </div>
);

export default Placement;
