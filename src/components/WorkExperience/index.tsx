import React from "react";
import "./index.css";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      <div className="experience">
        <h3>Software Developer | Pythys (Kuwait, remote)</h3>
        <h4 className="date">Feb 2021 - Present</h4>
        <ul>
          <li>
            Managing two projects by handling the ticketing system, contacting
            the client for requirements, and demoing the latest changes
          </li>
          <li>
            Working on various technologies on the front-end including
            <strong>
              {" "}
              Next.js, React.js, Vue.js, TypeScript, HTML, CSS, JS, Tailwind,
              Bootstrap and SASS
            </strong>
          </li>
          <li>
            Working on different technologies on the back-end including{" "}
            <strong>Node.js, Java, Groovy, SQL, Rest APIs and Moqui</strong>
          </li>
          <li>
            Developing mobile applications using <strong> React Native</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
