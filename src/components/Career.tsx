import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Enterprise Associate Engineer</h4>
                <h5>Unisys India Pvt. Ltd.</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Designed and managed AWS infrastructure using Terraform. Automated deployments with CI/CD pipelines, reducing manual effort, increasing efficiency, and improved system reliability through monitoring, alerting, logging, continuous performance optimization, proactive issue detection and resolution, ensuring seamless deployments and enhanced overall system stability.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Enterprise Sr System Engineer</h4>
                <h5>Unisys India Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and managing AWS infrastructure using Terraform.
              Automating deployments with CI/CD pipelines, reducing manual effort,
              increasing efficiency, and improving system reliability through
              monitoring, alerting, logging, continuous performance optimization,
              proactive issue detection and resolution, ensuring seamless
              deployments and enhanced overall system stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
