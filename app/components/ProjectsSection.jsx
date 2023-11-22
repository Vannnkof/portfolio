"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description: "Elaborately Styled Page, Responsive Layout",
    image: "/images/projects/landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mate-academy/layout_landing-page/pull/378",
    previewUrl: "https://vannnkof.github.io/layout_landing-page/",
  },
  {
    id: 2,
    title: "List of Todos",
    description: "Detailed REST API Functionality",
    image: "/images/projects/todos-react.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mate-academy/react_todo-app-with-api/pull/800",
    previewUrl: "https://vannnkof.github.io/react_todo-app-with-api/",
  },
  {
    id: 3,
    title: "Nice gadgets store",
    description: "full-stack project",
    image: "/images/projects/store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fe-jul23-NORM",
    previewUrl: "https://nice-gadgets-be-etof.onrender.com/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li

            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={project.id}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}</ul>
    </section>
  )
}

export default ProjectsSection