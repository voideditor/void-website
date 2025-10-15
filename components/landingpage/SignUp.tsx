'use client'

import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { logWaitlist } from "./landingpage_logging";
import { discordLink } from "../links";

export const SignUp = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    // const reasonRef = useRef<HTMLTextAreaElement | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailRef.current) {
            return
        }
        const email = emailRef.current.value
        // const reason = reasonRef.current.value
        if (!email) {
            alert('Please provide your email and try again.')
            return
        }

        try {
            await logWaitlist(email, undefined);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again or get in touch!');
        }
    };

    return (<section className='w-full px-2 min-h-sc+reen pb-20'>
        <div
            className='w-full overflow-hidden  px-5 relative min-h-[800px] flex items-center justify-center gap-12 rounded-xl'
            style={{
                position: 'relative',
            }}

        >
            {/* <div
                className='absolute inset-0 -z-10'
                style={{ backgroundImage: "url('/noise/3.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.1 // This sets the opacity to 20% }}
            /> */}

            {/* <div className="absolute inset-0 z-0 w-full h-full scale-[3] origin-left transform opacity-0 lg:opacity-[50%] [mask-image:linear-gradient(#ffff,_transparent,_75%)] pointer-events-none select-none bg-[length:100%]" style={{ mixBlendMode: "overlay", backgroundImage: `url(${process.env.NEXT_PUBLIC_BG_NOISE_IMG_2})` }} /> */}

            <div className='w-full max-w-xl py-8 max-sm:px-4 px-8 bg-transparent shadow-2xl rounded-lg flex flex-col gap-6'>
                <img className='isolate -mb-4 max-lg:-top-20 inset-0 pt-3 mx-auto ' src='/cortexide/slice_of_cortexide.png' alt={`A slice of the cortexide`} height={80} width={80} />


                <h2 className="text-2xl lg:text-3xl font-bold text-center px-4 text-black"
                    style={{
                        backgroundImage: '/noise/3.png'
                    }}
                >Get Early Access</h2>
                <div className='text-black/50 text-center text-balance mx-auto'>
                    {`Join CorteXIDE's `}<a href={discordLink} target='_blank' rel="noreferrer noopener nofollow" className='underline'>Discord</a>{` channel for private beta access, and enter your email below for an alert when we officially release! `}
                </div>
                <form className="flex max-sm:flex-col justify-center items-center max-w-xs gap-4 mx-auto" onSubmit={handleSubmit}>
                    <label className="w-full max-w-xs">
                        <span className="sr-only">Email</span>
                        <input
                            autoComplete='off'
                            ref={emailRef}
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 bg-gray-50 rounded-md text-black w-full border border-gray-300 focus:ring-white focus:bg-white duration-200 focus:outline-none focus:ring-1"
                            disabled={isSubmitted}
                            aria-required="true"
                            required
                        />
                    </label>
                    {/* <label className="w-full max-w-xs">
                        <span className="sr-only">Reason for access</span>
                        <textarea
                            ref={reasonRef}
                            placeholder="(Optional) Is there a specific reason you're interested in CorteXIDE (e.g. hosting on-prem)?"
                            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 bg-gray-700 text-white"
                            disabled={isSubmitted}
                            aria-required="false"
                        />
                    </label> */}
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:brightness-110 disabled:bg-gray-100 w-full max-w-20 duration-100"
                        disabled={isSubmitted}
                        aria-live="polite"
                    >
                        {!isSubmitted ? (
                            'Submit'
                        ) : (
                            <>
                                <span className='bg-gradient-to-tl from-blue-500 to-cyan-500 bg-clip-text text-transparent'>Success</span>
                                {/* <FaCheck className="text-blue-500" aria-hidden="true" /> */}
                            </>
                        )}
                    </button>
                </form>
                {isSubmitted &&
                    <div className='mt-4 text-black/50 text-center mx-auto'>
                        {`Thanks for joining the waitlist.`}
                        <br />
                        {`We'll be in touch shortly!`}
                        {/* <br/> */}
                        {/* {`In the meantime, feel free to follow us on `} */}
                    </div>
                }
            </div>
        </div>
    </section>
    );
};