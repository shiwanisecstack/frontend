import ProjectCard from "../components/projectcard";
import { Projects } from "../constants/projects";

function Project() {
  return ( <div className="min-h-screen bg-gray-950 text-white pt-20 top-30 pb-16 px-6 gap-10">
      <div className="max-w-6xl top-30 mx-auto gap-10">
       <div className="flex flex-col top-30 items-center text-center gap-10  mb-20"> 
  <h1 className="text-5xl  top-30 font-bold">
    <br></br>
  </h1>
   <h1 className="text-5xl font-bold mb-4 text-green-400">
    My <span className="text-green-400">Projects</span>
  </h1>
  

  <p className="mb-10 max-w-lg text-center text-gray-400"> 
    Here are some of the projects I've built using React, Tailwind CSS, JavaScript, and modern web technologies.
  </p>
</div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {Projects.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Project;