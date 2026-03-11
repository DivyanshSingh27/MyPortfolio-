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
                <h4>Frontend Developer</h4>
                <h5>Pantech.AI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and optimized 4+ interactive web modules using React.js,
              HTML, CSS, and JavaScript, improving page responsiveness by 25%.
              Collaborated within an agile team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Technocrats Institute of Technology</h5>
              </div>
              <h3>2021-2025</h3>
            </div>
            <p>
              Completed Bachelor of Technology in Computer Science. Built a strong foundation
              in Object Oriented Programming, Data Structures, and Algorithms. Developed
              multiple full-stack web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
