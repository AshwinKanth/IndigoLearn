import { MdMenuBook } from "react-icons/md";
import { MdOutlineAlarm, MdDateRange } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";

import "./index.css";

const WhyChooseUs = () => (
  <>
    <div className="heading-container">
      <h1 className="heading">Why Choose Us?</h1>
      <hr className="breakLine" />
    </div>
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <img
              src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1672153253/bulb_image_mpt5oq.png"
              className="image"
              alt="bulb"
            />
            <h3>Expert Faculty</h3>
            <p>
              Our Faculty are subject matter expertise with practical
              experience. They believe in #StudentFirst principle
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <img
              src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1672153826/ca_top_faculties_fzl7xa.png"
              alt="faculty"
              className="image"
            />
            <h3>Complete Success Package</h3>
            <p>
              Leading Exam Prep Destination with Video classes, Live sessions,
              Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice
              tests, Webinars.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <img
              src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1672153982/ca_unlimited_views_j4hto7.png"
              alt="placements"
              className="image"
            />
            <h3>Placements</h3>
            <p>
              Resume building workshops, mock interviews and placement drives
              will help you impress the top employers and get the dream job.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="whyChooseUsCards-container">
      <div className="cards">
        <h1 className="cardHeading">Levels</h1>
        <div className="cardDetailsContainer">
          <MdMenuBook />
          <p className="cardDescription">Three (13 papers)</p>
        </div>
      </div>
      <div className="cards">
        <h1 className="cardHeading">Duration</h1>
        <div className="cardDetailsContainer">
          <MdOutlineAlarm />
          <p className="cardDescription">6-30 months</p>
        </div>
      </div>
      <div className="cards">
        <h1 className="cardHeading">Exams</h1>
        <div className="cardDetailsContainer">
          <BsLaptop />
          <p className="cardDescription">Quarterly (Online)</p>
        </div>
      </div>
      <div className="cards">
        <h1 className="cardHeading">Exemptions</h1>
        <div className="cardDetailsContainer">
          <MdDateRange />
          <p className="cardDescription">Upto 9 papers</p>
        </div>
      </div>
    </div>
  </>
);

export default WhyChooseUs;
