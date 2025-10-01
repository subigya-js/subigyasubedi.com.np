import { HiLink } from "react-icons/hi"
import { links } from "../constants"

const LinksCard = () => {
    return (
        <div className='flex flex-col p-6 gap-6 bg-[#1b1c1c] rounded-3xl'>
            <h1 className="flex items-center gap-2 text-gray-400"><HiLink size={20}/> LINKS</h1>

            <div className='grid grid-cols-2 gap-5'>
                {
                    links.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:opacity-80 transition-colors p-2 rounded-lg'
                            style={{ backgroundColor: link.color}}
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default LinksCard