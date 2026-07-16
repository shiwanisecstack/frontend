import React from "react";

function ProjectCard({ proj }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 py-16 max-w-sm text-center shadow-lg hover:scale-105 transition duration-300">

      <img
        src={proj.img}
        alt={proj.title}
        className="w-28 h-28 md-20 mt-20 pt-12 object-cover mx-auto rounded-lg item-center"
      />

      <h2 className="text-xl font-bold mt-4">
        {proj.title}
      </h2>

      <p className="text-gray-400 mt-2">
        {proj.desc}
      </p>

      <a
        href={proj.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg"
      >
        View Project
      </a>

    </div>
  );
}

export default ProjectCard;