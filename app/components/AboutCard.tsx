import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { about } from "../constants";

const AboutCard = () => {
    return (
        <div className='flex flex-col px-6 py-10 gap-6 bg-[#1b1c1c] rounded-3xl'>
            <h1 className="font-bold text-xl">Hey, I&apos;m {about.name}</h1>
            <p className="text-gray-400 text-md">{about.desc}</p>

            <Link href="/about" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-200/80 hover:scale-105 duration-200 w-fit text-black px-4 py-3 rounded-full text-md">LEARN MORE <MdOutlineArrowRightAlt size={20} />
            </Link>
        </div>
    )
}

export default AboutCard