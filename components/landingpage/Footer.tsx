'use client'

import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { changelogLink, discordLink, downloadLink, emailLink, githubLink, support_email, waitlistLink, xLink } from "../links"
import { IoLogoGithub } from "react-icons/io"
import Image from "next/image"

export const Footer = () => {

    return (<>

        <footer className='relative py-6 px-6 max-w-[1400px] mx-auto border-t w-full'>

            <Image title='A slice of the CorteXIDE' className='absolute max-lg:-top-20 inset-0 pt-3 mx-auto' src={`/cortexide/slice_of_cortexide.png`} alt={`A slice of the cortexide`} height={60} width={60} />


            <div className='text-sm flex items-center flex-col lg:flex-row justify-center lg:justify-between gap-x-2 gap-y-4 '>

                {/* left */}
                <div>
                    <p className='text-center lg:text-left w-full text-balance'>&copy; {new Date().getFullYear()} CorteXIDE - Open Source AI IDE</p>
                </div>


                {/* right */}
                <div className="text-center lg:text-right flex flex-wrap-reverse items-center justify-center lg:justify-end gap-4 lg:mt-0">
                    <a href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='group'>
                        <FaDiscord className='mt-1 size-5 group-hover:fill-blue-500 fill-blue-700' />
                    </a>
                    <a href={xLink} target='_blank' rel="noreferrer noopener nofollow" className='group'>
                        <FaXTwitter className='mt-1 size-5 group-hover:fill-gray-700 fill-black' />
                    </a>
                    <a href={githubLink} className='group'>
                        <IoLogoGithub className='mt-1 size-5 group-hover:fill-gray-700 fill-black' />
                    </a>

                    <a href={emailLink} className="text-black hover:underline">{support_email}</a>
                    <a href={changelogLink} className="text-black hover:underline">{'Changelog'}</a>
                    {/* <a href={changelogLink} className="text-black hover:underline">{'FAQ'}</a> */}

                </div>

            </div>


        </footer>
    </>)
}
