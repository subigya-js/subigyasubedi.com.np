import { HiLink } from "react-icons/hi"
import { links } from "../constants"

const LinksCard = () => {
    return (
        <div className='flex flex-col px-4 sm:px-6 py-6 sm:py-8 gap-4 sm:gap-6 bg-[#1b1c1c] rounded-2xl sm:rounded-3xl w-full'>
            <h1 className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <HiLink size={18} className="sm:w-5 sm:h-5" />
                LINKS
            </h1>

            <div className='flex justify-between place-items-center md:grid sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5'>
                {
                    links.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:opacity-80 hover:scale-105 w-fit transition-all duration-200 p-3 sm:p-4 rounded-xl flex items-center justify-center'
                            style={{ backgroundColor: link.color }}
                            title={link.name}
                        >
                            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                                {link.icon}
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default LinksCard