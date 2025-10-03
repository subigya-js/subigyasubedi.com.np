import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { experiences } from "../constants";

const ExperienceCard = () => {
  return (
    <div className='min-h-[40vh] bg-[#1b1c1c] rounded-3xl px-6 py-4'>
      <div className="mt-4">
        {
          experiences.map((exp) => (
            <div key={exp.id} className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <Image src={exp.logo} alt={`logo`} width={80} height={80} className="p-2 rounded-2xl" />

              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-gray-200">{exp.role}&nbsp; &nbsp;<span className="text-[15px] font-normal">&bull; &nbsp; {exp.duration}</span></h2>
                <p className="text-sm font-semibold text-gray-400">{exp.company} | <span className="font-normal text-gray-400">{exp.location}</span></p>
                <p className="text-sm mt-2 text-gray-200 w-full max-w-xl">{exp.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, index) => (
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
          ))}
      </div>
      <div className="border-t border-gray-800 pt-4 flex justify-end">
        <Link href={"/experiences"} className="p-3 bg-gray-200 hover:bg-gray-200/80 hover:scale-105 duration-200 text-black rounded-xl transition flex items-center gap-2">
          VIEW ALL <MdOutlineArrowRightAlt size={20} />
        </Link>
      </div>
    </div>
  )
}

export default ExperienceCard