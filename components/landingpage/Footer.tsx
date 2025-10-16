'use client'

import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { changelogLink, discordLink, downloadLink, emailLink, githubLink, support_email, waitlistLink, xLink } from "../links"
import { IoLogoGithub } from "react-icons/io"
import Image from "next/image"

export const Footer = () => {

    return (<>

        <footer className='relative py-6 px-6 max-w-[1400px] mx-auto border-t border-gray-200 dark:border-gray-700 w-full'>

            <Image title='CorteXIDE Logo' className='absolute max-lg:-top-20 inset-0 pt-3 mx-auto' src={`/assets/cortexide/logo.svg`} alt={`CorteXIDE Logo`} height={60} width={60} />

            <div className='text-sm flex items-center flex-col lg:flex-row justify-center lg:justify-between gap-x-2 gap-y-4 '>

                {/* left */}
                <div>
                    <p className='text-center lg:text-left w-full text-balance text-gray-600 dark:text-gray-400'>&copy; {new Date().getFullYear()} CorteXIDE Project – MIT License</p>
                </div>

                {/* right */}
                <div className="text-center lg:text-right flex flex-wrap-reverse items-center justify-center lg:justify-end gap-4 lg:mt-0">
                    <a href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='group'>
                        <FaDiscord className='mt-1 size-5 group-hover:fill-cortexide-accent fill-cortexide-secondary transition-colors' />
                    </a>
                    <a href={xLink} target='_blank' rel="noreferrer noopener nofollow" className='group'>
                        <FaXTwitter className='mt-1 size-5 group-hover:fill-cortexide-accent fill-gray-600 dark:fill-gray-400 transition-colors' />
                    </a>
                    <a href={githubLink} className='group'>
                        <IoLogoGithub className='mt-1 size-5 group-hover:fill-cortexide-accent fill-gray-600 dark:fill-gray-400 transition-colors' />
                    </a>

                    <a href={emailLink} className="text-gray-600 dark:text-gray-400 hover:text-cortexide-accent transition-colors">{support_email}</a>
                    <a href={changelogLink} className="text-gray-600 dark:text-gray-400 hover:text-cortexide-accent transition-colors">{'Changelog'}</a>

                </div>

            </div>

        </footer>
    </>)
}
