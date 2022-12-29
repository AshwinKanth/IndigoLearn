import "./index.css";

const LearnInAcca = () => (
  <div className="LearnInAcca-container">
    <div className="heading-container">
      <h1 className="heading">What will you Learn in ACCA?</h1>
      <hr className="breakLine" />
    </div>
    <div className="LearnInAccaCards-container">
      <div className="AccaCards">
        <p className="cardUpperHeading">Knowledge Level</p>
        <ul className="innerCardDetails">
          <li className="listItem">Business and Technology (BT)</li>
          <li className="listItem">Management Accounting (MA)</li>
          <li className="listItem">Financial Accounting (FA)</li>
        </ul>
        <p className="firstCardLowerHeading">6 papers</p>
      </div>
      <div className="AccaCards">
        <p className="cardUpperHeading">Knowledge Level</p>
        <ul className="innerCardDetails">
          <li className="listItem">Corporate and Business Law (LW)</li>
          <li className="listItem">Performance Management (PM)</li>
          <li className="listItem">Taxation (TX)</li>
          <li className="listItem">Financial Reporting (FR)</li>
          <li className="listItem">Audit and Assurance (AA)</li>
          <li className="listItem">Financial Management (FM)</li>
        </ul>
        <p className="secondCardLowerHeading">3 papers</p>
      </div>
      <div className="AccaCards">
        <p className="cardUpperHeading">Knowledge Level</p>
        <ul className="innerCardDetails">
          <p className="innerDescription">Compulsory</p>
          <li className="listItem">SBL - Strategic Business Leader</li>
          <li className="listItem">SBR - Strategic Business Reporting</li>
          <p className="innerDescription">Two out of the following</p>
          <li className="listItem">Advanced Financial Management (AFM)</li>
          <li className="listItem">Advanced Performance Management (APM)</li>
          <li className="listItem">Advanced Taxation (ATX)</li>
          <li className="listItem">Advanced Audit and Assurance (AAA)</li>
        </ul>
        <p className="thirdCardLowerHeading">4 papers</p>
      </div>
    </div>
  </div>
);

export default LearnInAcca;
