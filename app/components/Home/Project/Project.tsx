"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectInfo } from "@/app/Data/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "../../Helper/SectionHeader";

const Projects = () => {
  return (
    <div id="Projects" className="pt-16 pb-16 bg-[#0f0715] text-white">
      
      <SectionHeader>Projects</SectionHeader>

      <div className="grid gap-12 px-6 md:px-16 pt-15">
        {projectInfo.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row bg-[#1c1324] p-6 rounded-2xl shadow-lg gap-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-[400px] h-auto rounded-lg cursor-pointer"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-sm font-semibold mb-2">{project.title}</h3>
                <p className="text-2xl text-sm text-gray-300 mb-3  justify-content">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-400 text-black px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-2xl text-sm flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 flex items-center gap-1 no-underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
