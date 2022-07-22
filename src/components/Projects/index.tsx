import React from "react";
import "./index.css";

type Project = {
  name: string;
  description: string;
  imgPath: string;
  technologies: string[];
  github: string;
  url: string;
};

const Projects = () => {
  const projects = [
    {
      name: "Beauty Chain",
      description: "A website for Beauty Chain company for skin products",
      technologies: ["HTML", "CSS", "JavaScript"],
      imgPath: "/images/beauty-chain.gif",
      github: "https://github.com/anasomar1/BeautyChain",
      url: "https://beauty-chain.netlify.app/",
    },
    {
      name: "Keto Recipes Finder",
      description: "Find keto-friendly recipes to help you stay fit",
      technologies: ["React", "Styled Components", "React Router", "API"],
      imgPath: "/images/keto.gif",
      github: "https://github.com/anasomar1/KetoRecipes",
      url: "https://ketorecipesfinder.netlify.app/",
    },
    {
      name: "3ajeena - عجينة",
      description: "Calculate the percentage of each dough component",
      technologies: ["React", "Styled Components", "React Router", "API"],
      imgPath: "/images/ajeena.gif",
      github: "https://github.com/anasomar1/Ajeena",
      url: "https://3ajeena.netlify.app/",
    },
    {
      name: "Talabak",
      description: "A website for a fake company that delivers your orders",
      technologies: ["HTML", "CSS"],
      imgPath: "/images/talabak.gif",
      github: "https://github.com/anasomar1/DeliveryWebsite",
      url: "https://delivery-website-ar.netlify.app/",
    },
    {
      name: "Compare the Weather",
      description: "Compare the weather between any two cities for three days",
      technologies: ["React", "Styled Components", "API"],
      imgPath: "/images/compare-weather.gif",
      github: "https://github.com/anasomar1/Compare-weather",
      url: "https://compare-weather.netlify.app/",
    },
    {
      name: "BlueDoc",
      description: "Book an appointment with a doctor at BlueDoc",
      technologies: ["React", "SASS", "Local storage"],
      imgPath: "/images/blue-doc.gif",
      github: "https://github.com/anasomar1/Doctor-Appointment",
      url: "https://bluedoc.netlify.app/",
    },
  ];

  return (
    <div className="personal-projects">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project: Project) => (
          <div className="project">
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
            <img src={project.imgPath} alt={project.name} />
            <div className="technologies">
              {project.technologies.map((technology: string) => (
                <button className="technology btn">{technology}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
