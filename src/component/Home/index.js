import { Component } from "react";

import { FaSmile } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

import RequestForm from "../RequestForm";
import WhyChooseUs from "../WhyChooseUs";
import LearnInAcca from "../LearnInAcca";
import Placement from "../Placement";
import "./index.css";

class Home extends Component {
  cardsList = () => (
    <div className="cards-container">
      <div className="card-container">
        <FaSmile className="smileIcon" />
        <div className="description-container">
          <p className="card-description">Registered Users</p>
          <p className="card-description">2,48,876</p>
        </div>
      </div>
      <div className="card-container">
        <MdMenuBook className="smileIcon" />
        <div className="description-container">
          <p className="card-description">Courses Enrolled</p>
          <p className="card-description">65,159</p>
        </div>
      </div>
      <div className="card-container">
        <MdOutlineOndemandVideo className="smileIcon" />
        <div className="description-container">
          <p className="card-description">Minutes Watched</p>
          <p className="card-description">2,089,433,631</p>
        </div>
      </div>
      <div className="card-container">
        <FaUserFriends className="smileIcon" />
        <div className="description-container">
          <p className="card-description">Faculty</p>
          <p className="card-description">8 Experts</p>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <>
        <div className="app-container">
          <div className="left-container">
            <h1 className="heading">Become ACCA in 18 months</h1>
            <p className="description">
              Acquire globally recognized accountancy qualification, ACCA (also
              called as Global CA), and get placed in top MNCs & Big4s. Begin
              ACCA prep with 1FIN now.
            </p>
            {this.cardsList()}
            <div className="buttons-container">
              <button className="downloadButton">Download Brochure</button>
              <button className="partnerButton">
                <img
                  src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1672136259/acca_silver_lp_logo_innprj.png"
                  alt="partner"
                  className="partnerImage"
                />
              </button>
            </div>
          </div>
          <div className="requestForm-container">
            <RequestForm />
          </div>
        </div>
        <WhyChooseUs />
        <LearnInAcca />
        <Placement />
      </>
    );
  }
}

export default Home;
