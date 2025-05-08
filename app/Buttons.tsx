import { FiChevronsRight, FiExternalLink } from "react-icons/fi"
import { IoLogoGithub } from "react-icons/io"

import posthog from "posthog-js"
import { waitlistLink, githubStarLink, downloadLink } from "@/components/links"
import { FaDiscord } from "react-icons/fa"

export const StarOnGithubButton = ({ label = undefined, posthogLabel }: { label?: string, posthogLabel?: string }) => {
    // <div className="shadow hover:shadow-lg bg-white w-20 h-20 duration-[.5s] ease-out active:scale-90"></div>
    return <a
        href={githubStarLink}
        draggable={false}
        tabIndex={0} // part of screen reader tab index
        className="max-sm:w-[60vw] group gap-2 flex justify-center items-center drop-shadow-xl p-2 py-3 rounded-lg btn px-8 opacity-90 whitespace-nowrap border-0 bg-blue-600 hover:brightness-105 active:brightness-105 active:scale-95 duration-200 border-none outline-none"
        onClick={() => posthog.capture('ButtonContribute', { posthogLabel })}
    >
        <span className='text-white text-xl font-medium'>{label ? label : `Star on Github`}</span>
        <IoLogoGithub className='fill-white min-w-7 min-h-7 max-[320px]:hidden' />
    </a>
}


export const JoinWaitlistButton = ({ posthogLabel }: { posthogLabel?: string }) => {
    return <a // <a> tag instead of Link so the page reloads and scrolls to top
        href={downloadLink}
        draggable={false}
        tabIndex={0} // part of screen reader tab index
        className="max-sm:w-[60vw] group gap-2 flex items-center justify-center drop-shadow-xl p-2 py-3 rounded-lg btn px-8 opacity-90 whitespace-nowrap border-0 bg-gray-600 hover:brightness-105 active:brightness-105 active:scale-95 duration-200 border-none outline-none"
        onClick={() => posthog.capture('ButtonGetAccess', { posthogLabel })}
    >
        <span className='text-white text-xl font-medium'>Download</span>
        <FiExternalLink className='stroke-white min-w-6 min-h-6 max-[320px]:hidden' />
    </a>
}

