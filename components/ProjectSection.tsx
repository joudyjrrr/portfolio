"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "landingPage for Ulu tech",
    image: "/images/projects/1.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://ulu-tech-wep.vercel.app/",
  },
  {
    id: 2,
    title: "landingpage for Qumra",
    image: "/images/projects/2.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://qumra-6x8g.vercel.app/",
  },
  {
    id: 3,
    title: "landingPage for Apex",
    description: "",
    image: "/images/projects/3.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://landingpage-lilac-beta.vercel.app/",
  },
  {
    id: 4,
    title: " Remi Dashboard",
    image: "/images/projects/4.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "http://remi-store.com/",
  },
  {
    id: 5,
    title: "landing page for Traninig",
    image: "/images/projects/5.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://traning-landingpage-bzfo.vercel.app/",
  },
  {
    id: 6,
    title: "landing page for Archouse",
    image: "/images/projects/6.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://arc-hoseee.vercel.app/",
  },
  {
    id: 7,
    title: "landing page for ICanCopmany",
    image: "/images/projects/7.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://icanwep.vercel.app/",
  },
  {
    id: 8,
    title: "Dashboard for htc Company",
    image: "/images/projects/8.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "https://warsha.htc-company.com",
  },
  {
    id: 8,
    title: " HumyPionnerDashboard",
    image: "/images/projects/9.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "http://3.214.164.25:84",
  },
  {
    id: 8,
    title: " Accounting Plus Dashboard",
    image: "/images/projects/10.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "http://accapp.plus-99.com/",
  },
  {
    id: 8,
    title: " OorFeel Dashboard",
    image: "/images/projects/10.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "https://dashboard.oorfeel.com",
  },
  {
    id: 8,
    title: " OorFeel Dashboard",
    image: "/images/projects/11.jpg",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "https://dashboard.oorfeel.com",
  },
  {
    id: 8,
    title: " OorFeel Website",
    image: "/images/projects/12.jpg",
    tag: ["All", "LandingPage"],
    gitUrl: "/",
    previewUrl: "https://oorfeel.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="LandingPage"
          isSelected={tag === "LandingPage"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dashboard"
          isSelected={tag === "Dashboard"}
        />
      </div>
      <ul
        ref={ref}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
