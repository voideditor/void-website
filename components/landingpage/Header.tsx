/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaDiscord } from "react-icons/fa"
import VoidAnimatedText from "./VoidAnimatedText"
import { IoLogoGithub } from "react-icons/io"
import {  changelogLink, contributeLink, discordLink, waitlistLink, githubLink } from "../links"
import Image from "next/image"
import { baseUrl } from "@/app/sitemap"

export const Header = () => {

    return <div className='top-0 left-0 right-0 z-10 py-6 mx-auto'>
        <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12 '>

            {/* header */}
            <div className='h-12 py-2 px-4 max-w-[1400px] mx-auto flex items-center justify-start bg-gray-50 backdrop-blur-md shadow-md rounded-lg overflow-hidden gap-3'>

                <Link draggable={false} href='/' className='group pr-2'>
                    <h2 className="flex items-center gap-2 font-extrabold">
                        <img className='group-hover:brightness-[2] duration-200' src={`${process.env.NEXT_PUBLIC_LOGO_URL!}`} alt='Void Logo' height={32} width={32} />
                        <div className="pb-1 text-transparent tracking-tighter bg-clip-text bg-gradient-to-tl from-black to-gray-500 text-3xl whitespace-nowrap group-hover:brightness-150 duration-200">
                            Void
                        </div>
                    </h2>
                </Link>


                <Link draggable={false} href={waitlistLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black max-sm:text-sm'>
                            Waitlist
                        </span>
                    </div>
                </Link>



                <Link draggable={false} href={githubLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black max-sm:text-sm'>
                            Contribute
                        </span>
                    </div>
                </Link>




                {/* <Link draggable={false} href='/blog'>
                        Blog
            </Link> */}

                {/* <a draggable={false} href={contributeLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 ml-auto max-[350px]:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black max-sm:text-sm'>
                            Contribute
                        </span>
                    </div>
                </a> */}
                <a draggable={false} href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 ml-auto max-[350px]:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black max-sm:text-sm'>
                            Discord
                        </span>
                    </div>
                </a>
                <a draggable={false} href={githubLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-black max-sm:text-sm'>
                            GitHub
                        </span>
                    </div>
                </a>
            </div>

        </div>
    </div>
}

