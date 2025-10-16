/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FaDiscord } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { discordLink, waitlistLink, githubLink, downloadLink } from "../links"
import Image from "next/image"
import { baseUrl } from "@/app/sitemap"
import { ThemeToggle } from "../ThemeToggle"

export const Header = () => {

    return <div className='top-0 left-0 right-0 z-10 py-6 mx-auto'>
        <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12 '>

            {/* header */}
            <div className='h-12 py-2 px-4 max-w-[1400px] mx-auto flex items-center justify-start bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md rounded-lg overflow-hidden gap-3 border border-gray-200/50 dark:border-gray-700/50'>

                <Link draggable={false} href='/' className='group pr-2'>
                    <h2 className="flex items-center gap-2 font-extrabold">
                        <img className='group-hover:brightness-110 duration-200' src='/assets/cortexide/logo.svg' alt='CorteXIDE Logo' height={32} width={32} />
                        <div className="gradient-text text-3xl whitespace-nowrap group-hover:brightness-110 duration-200">
                            CorteXIDE
                        </div>
                    </h2>
                </Link>

                <Link draggable={false} href={downloadLink} className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 duration-100 max-[380px]:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-gray-900 dark:text-gray-100'>
                            Download
                        </span>
                    </div>
                </Link>

                <Link draggable={false} href='/docs' className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-gray-900 dark:text-gray-100'>
                            Docs
                        </span>
                    </div>
                </Link>

                <Link draggable={false} href='/about' className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-gray-900 dark:text-gray-100'>
                            About
                        </span>
                    </div>
                </Link>

                <div className='ml-auto' />

                <ThemeToggle />

                <a draggable={false} href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 duration-100 max-sm:hidden'>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-gray-900 dark:text-gray-100'>
                            Discord
                        </span>
                    </div>
                </a>
                <a draggable={false} href={githubLink} target='_blank' rel="noreferrer noopener nofollow" className='group py-1 px-2 rounded-md overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-800 duration-100 '>
                    <div className='flex items-center justify-center duration-200 gap-1'>
                        <span className='text-lg whitespace-nowrap text-gray-900 dark:text-gray-100'>
                            GitHub
                        </span>
                    </div>
                </a>
            </div>

        </div>
    </div>
}

