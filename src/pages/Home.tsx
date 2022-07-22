import React from "react";
import MyInfo from "../components/MyInfo";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";

const Home = () => {
  return (
    <div className="page">
      <MyInfo />
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default Home;
