import React from "react";
import "./index.css";
import { projects } from "./projects";

type Project = {
  name: string;
  description: string;
  imgPath: string;
  technologies: string[];
  github: string;
  url: string;
};

const Projects = () => {
  return (
    <div className="personal-projects">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project: Project) => (
          <div className="project" key={project.url}>
            <div className="details">
              <h3>{project.name}</h3>
              <h5 className="description">{project.description}</h5>
              <div className="links">
                <a target="_blank" rel="noreferrer" href={project.github}>
                  GitHub
                </a>
                <a target="_blank" rel="noreferrer" href={project.url}>
                  Live Website
                </a>
              </div>
            </div>
            <img src={project.imgPath} alt={project.name} />
            <div className="technologies">
              {project.technologies.map((technology: string, index: number) => (
                <button className="technology btn" key={index}>
                  {technology}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
