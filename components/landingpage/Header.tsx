/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaDiscord } from "react-icons/fa"
import VoidAnimatedText from "./VoidAnimatedText"
import { IoLogoGithub } from "react-icons/io"
import { discordLink, waitlistLink, githubLink, downloadLink } from "../links"
import Image from "next/image"
import { baseUrl } from "@/app/sitemap"

export const Header = () => {

    return <div className='top-0 left-0 right-0 z-20 sticky backdrop-blur-md supports'>
        <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12 '>

            {/* header */}
            <div className='h-12 my-3 py-2 px-4 max-w-[1400px] mx-auto flex items-center justify-start bg-gray-50/70 shadow-md rounded-lg overflow-hidden gap-3 animate-in fade-in slide-in-from-top-2 duration-500 ease-out'>

                <Link draggable={false} href='/' className='group pr-2'>
                    <h2 className="flex items-center gap-2 font-extrabold">
                        <img className='group-hover:brightness-[2] duration-200' src={`${process.env.NEXT_PUBLIC_LOGO_URL!}`} alt='Void Logo' height={32} width={32} />
                        <div className="text-transparent tracking-tighter bg-clip-text bg-gradient-to-tl from-black to-gray-500 text-3xl whitespace-nowrap group-hover:brightness-150 duration-200">
                            Void
                        </div>
                    </h2>
                </Link>


                <Link draggable={false} href={downloadLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 max-[380px]:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black '>
                            Download
                        </span>
                    </div>
                </Link>

                {/* <Link draggable={false} href={waitlistLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black '>
                            Waitlist
                        </span>
                    </div>
                </Link> */}



                <Link draggable={false} href={githubLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black '>
                            Contribute
                        </span>
                    </div>
                </Link>

                <div className='ml-auto' />

                <a draggable={false} href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black '>
                            Discord
                        </span>
                    </div>
                </a>
                <a draggable={false} href={githubLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 '>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black '>
                            GitHub
                        </span>
                    </div>
                </a>
            </div>

        </div>
    </div>
}

