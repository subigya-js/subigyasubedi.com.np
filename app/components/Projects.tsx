import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";
import { projects } from "../constants";

interface Project {
  id: string;
  name: string;
  desc: string;
  repo: string;
  deploy: string;
  isDeployed: boolean;
  skills: string[];
  isPrivate: boolean;
}

const Projects: React.FC = () => {
  return (
    <div className='min-h-[40vh] rounded-3xl px-6 py-4'>
      <div className="flex flex-col gap-10">
        {
          projects.map((project: Project, index) => (
            <div key={project.id} className={`flex items-start gap-4 ${index !== projects.length - 1 ? 'pb-6 border-b border-[#343434]' : ''}`}>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className="text-xl font-bold text-gray-200">{project.name}</h2>
                  <div className="flex items-center">
                    {
                      project.isDeployed ? (
                        <Link href={project.deploy} target="_blank" rel="noopener noreferrer">
                          <button className="text-gray-400 hover:text-gray-500 hover:scale-105 duration-500 font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                            <LuExternalLink size={16} />
                          </button>
                        </Link>
                      ) : (
                        <button className="text-gray-400 hover:text-gray-500 hover:scale-105 duration-500 font-bold py-2 px-4 rounded-lg text-sm cursor-pointer relative group">
                          <VscEyeClosed size={16} />
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="bg-[#1b1c1c] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Deployment in Progress
                            </div>
                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#1b1c1c] mx-auto"></div>
                          </div>
                        </button>
                      )
                    }
                    {project.isPrivate ? (
                      <button className="text-gray-400 hover:text-gray-500 hover:scale-105 duration-500 font-bold py-2 px-4 rounded-lg text-sm cursor-pointer relative group">
                        <CiLock size={16} />
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-[#1b1c1c] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Private Repo
                          </div>
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#1b1c1c] mx-auto"></div>
                        </div>
                      </button>
                    ) : (
                      <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                        <button className="text-gray-400 hover:text-gray-300 hover:scale-105 duration-500 font-bold p-2 rounded-lg text-xs transition-colors">
                          <FaGithub size={16} />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm mt-2 text-gray-200 w-full max-w-2xl">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-[#2c2c2c] text-gray-300 rounded-xl"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
