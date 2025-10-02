import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { about } from "../constants";

const AboutCard = () => {
    return (
        <div className='flex flex-col px-4 sm:px-6 py-6 sm:py-8 lg:py-10 gap-4 sm:gap-6 bg-[#1b1c1c] rounded-2xl sm:rounded-3xl w-full'>
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">Hey, I&apos;m {about.name}</h1>
            <p className="text-gray-400 text-sm sm:text-md leading-relaxed">{about.desc}</p>

            <Link href="/about" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-200/80 hover:scale-105 duration-200 w-fit text-black px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-md font-medium">
                LEARN MORE <MdOutlineArrowRightAlt size={18} className="sm:w-5 sm:h-5" />
            </Link>
        </div>
    )
}

export default AboutCard