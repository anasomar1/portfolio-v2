import React from "react";
import "./index.css";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      <div className="experience">
        <h3>
          Associate Software Development Engineer | MBC Group - Shahid (Amman -
          Jordan)
        </h3>
        <h4 className="date">Oct 2022 - Present</h4>
        <ul>
          <li>
            Using <strong>React Native</strong> to implement new features, bug
            fixes and enhancements to the IOS mobile app
          </li>
          <li>
            Handling state management with different tools like{" "}
            <strong>Redux</strong> and
            <strong> Context</strong>
          </li>
          <li>
            Working in an agile environment, giving time estimations and
            performing my tasks in a timely manner
          </li>
        </ul>
      </div>
      <div className="experience">
        <h3>Software Developer | Pythys (Kuwait, remote)</h3>
        <h4 className="date">Feb 2021 - Oct - 2022</h4>
        <ul>
          <li>
            Project manager to two projects. Worked in an agile environment,
            created sprints, met with clients, divided the work among my team,
            and offered the team help on a regular basis
          </li>
          <li>
            Worked with various technologies on the front-end including
            <strong>
              {" "}
              Next.js, React.js, Vue.js, TypeScript, HTML, CSS, JS, Tailwind,
              Bootstrap and SASS
            </strong>
          </li>
          <li>
            Worked on different technologies on the back-end including{" "}
            <strong>Node.js, Java, Groovy, SQL, Rest APIs and Moqui</strong>
          </li>
          <li>
            Developed mobile applications using <strong> React Native</strong>
          </li>
          <li>
            Used Git in a team environment to coordinate the work among my team
            and to keep track of changes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
