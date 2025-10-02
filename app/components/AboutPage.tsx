import Image from 'next/image';
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdSchool } from "react-icons/md";
import { about, education, skills } from '../constants';

const AboutPage = () => {
    return (
        <div className='min-h-[40vh] w-full px-6 py-4'>
            {/* About */}
            <div className='flex flex-col items-center gap-4 p-5 bg-[#1b1c1c] rounded-3xl'>
                <Image src={about.image} alt="About Image" width={200} height={200} className="rounded-full mb-4" />

                <h1 className="font-bold text-xl">Hey, I&apos;m {about.name}</h1>
                <p className="text-gray-400 text-lg w-full max-w-xl">{about.desc}</p>
            </div>

            {/* Skills */}
            <div className='w-full max-w-2xl flex flex-col gap-3 bg-[#1b1c1c] mt-6 p-5 rounded-3xl'>
                <div className='flex items-center gap-3 text-gray-400'>
                    <HiMiniWrenchScrewdriver className='text-gray-400' /> SKILLS
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-[#2c2c2c] text-gray-300 rounded-xl"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div className='w-full max-w-2xl flex flex-col gap-3 bg-[#1b1c1c] mt-6 p-5 rounded-3xl'>
                <div className='flex items-center gap-3 text-gray-400'>
                    <MdSchool className='text-gray-400' /> EDUCATION
                </div>
                <div>
                    {
                        education.map((edu) => (
                            <div key={edu.id} className="flex items-center gap-4">
                                <Image src={edu.logo} alt={`logo`} width={80} height={80} className="p-2 rounded-2xl" />

                                <div className="flex flex-col gap-1">
                                    <h2 className="text-md font-bold text-gray-200">{edu.name}</h2>
                                    <p className="text-sm font-semibold text-gray-400">{edu.institution}</p>
                                    <p className="text-sm text-gray-200 w-full max-w-xl">{edu.duration} &nbsp; &bull; &nbsp; CGPA: {edu.cgpa}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default AboutPage