
import Image from "next/image"
import AnimatedPage from "../components/AnimatedPage"
import { experiences } from "../constants"

const page = () => {
    return (
        <AnimatedPage>
            <div className='min-h-[70vh] flex items-center justify-center px-6 py-4'>
                <div className="flex flex-col gap-10 max-w-4xl w-full">
                    {
                        experiences.map((exp) => (
                            <div key={exp.id} className="mb-6 flex items-center gap-4">
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
            </div>
        </AnimatedPage>
    )
}

export default page