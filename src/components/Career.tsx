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
                <h4>Enterprise Analyst / DevOps Engineer</h4>
                <h5>Unisys India Pvt. Ltd., Bengaluru</h5>
              </div>
              <h3>Jul 2023 – Present</h3>
            </div>
            <p>
              Designed, provisioned, and managed AWS infrastructure using Terraform, improving scalability, security, and deployment efficiency. Implemented Infrastructure as Code and configuration management workflows using Terraform and Ansible. Built and standardized CI/CD pipelines to automate application build, testing, and deployment. Worked with AWS Lambda and DynamoDB to support serverless and event-driven workloads. Provided 24x7 production support, ensuring high availability, uptime, and rapid incident resolution. Improved monitoring, alerting, and performance tuning using Prometheus and Grafana dashboards. Containerized workloads using Docker and deployed microservices on Kubernetes clusters. Collaborated with development, QA, and security teams to drive DevOps adoption and operational excellence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Server Engineer</h4>
                <h5>Taggd (PeopleStrong), Gurgaon</h5>
              </div>
              <h3>Feb 2023 – May 2023</h3>
            </div>
            <p>
              Managed server infrastructure and operations, ensuring reliable performance and uptime for enterprise applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Administrator</h4>
                <h5>Team Lease Services Ltd, Gurgaon</h5>
              </div>
              <h3>Nov 2020 – Feb 2022</h3>
            </div>
            <p>
              Handled system administration tasks, including maintenance, troubleshooting, and optimization of IT systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Administrator</h4>
                <h5>Enhance Business Solutions, Gurgaon</h5>
              </div>
              <h3>Dec 2019 – May 2020</h3>
            </div>
            <p>
              Performed system administration duties, focusing on system stability and user support.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Administrator</h4>
                <h5>MSR IT Ltd, Gurgaon</h5>
              </div>
              <h3>Oct 2018 – May 2019</h3>
            </div>
            <p>
              Managed IT infrastructure, ensuring smooth operations and resolving technical issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
