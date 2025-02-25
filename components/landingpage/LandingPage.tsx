/* eslint-disable @next/next/no-img-element */
'use client'

import React, { SVGAttributes, useEffect, useRef, useState } from 'react';

import { FaArrowDown, FaArrowRight, FaArrowsAlt, FaCheck, FaChevronLeft, FaChevronRight, FaDatabase, FaDivide, FaDotCircle, FaExternalLinkSquareAlt, FaEye, FaLink, FaLock, FaMeteor, FaSlash, FaStar, FaTree } from 'react-icons/fa';
import { FaArrowDown19, FaArrowRightLong, FaArrowsLeftRight, FaLeftRight } from 'react-icons/fa6';
import { LuArrowLeftRight } from 'react-icons/lu';
import { CgArrowLongRight } from 'react-icons/cg';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark, a11yDark, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { VscVscode } from 'react-icons/vsc'
import { StarOnGithubButton,  JoinWaitlistButton } from '@/app/Buttons';
import Image from 'next/image';
import { discordLink, emailLink } from '../links';



const BigContent = ({ title, desc, src, children, }: { title: string, desc, src: string, children?, }) => {
    return <div className='flex flex-col items-center'>
        <h2 className='text-center font-bold max-sm:text-lg text-2xl px-4'>
            {title}
        </h2>
        <div className='text-center mx-auto max-w-xl mb-2 max-sm:text-base'>
            {desc}
        </div>
        <img
            src={src}
            alt={title}
            // shadow-[0px_0px_0px_4px_rgba(0,0,0)] and ring can overlap
            className={`bg-[#1e1e1e] aspect-[16_10] max-w-[300px] lg:max-w-[400px] w-full h-full rounded-xl object-contain`}
        />
        {children}

    </div>
}

const GridElement = ({ name, src = undefined, alt = undefined, children }: { name: string | null, src?: string, alt?: string, children?: React.ReactNode }) => {

    let childContents: React.ReactNode
    if (children) {
        childContents = children
    }
    else {
        if (name === null)
            throw new Error('GridElement: name was null')
        childContents = <img src={src ?? '/noise/3.png'} alt={name} className='max-h-[300px] max-w-full w-auto h-auto rounded-lg max-sm:object-contain object-cover ' />
    }

    return <>
        <div className="py-4">
            <div>
                <div className='text-center text-xl font-semibold pb-4'>{name}</div>

                <div className='flex items-center justify-center'>
                    {childContents}
                </div>
            </div>
        </div>
    </>
}


const Fold = () => {

    return <section className=' '>

        <div className='  relative w-full border shadow-xl px-5 min-h-[800px] flex justify-center gap-12 rounded-xl overflow-hidden'>

            {/* This image is being preloaded in head */}
            {/* <div className="absolute inset-0 z-0 w-full h-full scale-[1] transform opacity-[0%] [mask-image:linear-gradient(#ffff, transparent, 75%)] pointer-events-none select-none bg-[length:100%]" style={{ mixBlendMode: "overlay", backgroundImage: `url(${process.env.NEXT_PUBLIC_BG_NOISE_IMG!})` }} /> */}

            <div className='w-full'>

                <h1 className='text-center font-extrabold tracking-tighter leading-tight transition duration-200 mt-[12vh]'>

                    <img className='isolate -mb-4 max-lg:-top-20 inset-0 pt-3 mx-auto max-sm:scale-75' src='/void/slice_of_void.png' alt={`A slice of the void`} height={250} width={250} />

                    <span className='text-black drop-shadow-xl text-3xl md:text-7xl font-bold tracking-tighter'>
                        {`The open source`}
                        <br />
                        {`AI code editor.`}
                        {/* {`The open source `}
                        <br />
                        {`AI Code Editor.`} */}
                        {/* {`The open source AI code editor. `} */}
                    </span>
                </h1>

                {/* Description */}
                <div className='mx-auto text-center max-w-[800px] py-10 '>

                    {/* <div className='text-balance max-sm:text-base text-2xl font-bold tracking-tight leading-tight text-black drop-shadow-xl'>
                        {`Use AI autocomplete, inline edits, codebase chat, agentic features, and more, in a privacy-first AI IDE.`}
                    </div> */}
                    <div className='text-balance max-sm:text-base text-xl font-semibold tracking-tight leading-tight text-black drop-shadow-xl mb-2'>
                        {/* {`Void is an open source Cursor alternative. Write code with your favorite AI tools, with options for hosting on-prem.`} */}
                        {/* {`Void is an open source Cursor alternative. Develop in a fully-featured IDE, and host your LLM anywhere.`} */}
                        {/* {`Void is an open source Cursor alternative. We let you use the best AI tools, while having full control over privacy.`} */}
                        {/* {`Void is an open source Cursor alternative. Write code with the best AI tools, while having full control over your data.`} */}
                        {`Void is an open source Cursor alternative. Write code with the best AI tools, use any model, and retain full control over your data.`}
                    </div>
                    {/* {`Void is an open source Cursor alternative. Build your project with AI auto-complete, inline edits, and codebase chat, with full control over .`} */}
                    {/* {`We offer autocomplete, inline edits, embedded chat, agentic features, and more, without compromising privacy.`} */}
                    {/* {`Void is an open source Cursor alternative. We use AI to give developers an insane productivity boost without sacrificing privacy. We offer autocomplete, inline edits, codebase chat, AI agents, and integrations with tools like Greptile and Ollama.`} */}

                    {/* {`Void is an open source Cursor alternative. We offer autocomplete, inline edits, codebase chat, AI agents, and integrations with tools like Greptile and Ollama, and options for keeping your data private.`} */}
                </div>

                <div className='flex gap-x-3 gap-y-4 justify-center max-sm:flex-wrap'>
                    <StarOnGithubButton posthogLabel="2" />
                    <JoinWaitlistButton posthogLabel="3" />
                </div>


                {/* Backed by YC */}
                <div className=' flex flex-col items-center w-full my-14 flex-nowrap text-nowrap'>
                    <div className='inline-flex items-center relative px-5 rounded-full '>
                        <span className="relative inline-flex items-center text-gray-500 font-semibold">
                            Backed by
                            <img src="/yc.svg" className="h-5 w-auto ml-2" alt="Y Combinator Logo" />
                        </span>
                    </div>

                    {/* <a href='https://www.ycombinator.com/launches/Lrh-void-the-open-source-cursor-alternative' target='_blank'>
                        <img alt='Launch YC: Void: The open source Cursor alternative' src='https://www.ycombinator.com/launches/Lrh-void-the-open-source-cursor-alternative/upvote_embed.svg' />
                    </a> */}

                </div>
            </div>

        </div>



    </section>
}





const DataPrivacy = () => {




    return <section className='relative overflow-hidden flex flex-col items-center justify-center gap-16 my-32 px-8 py-32 lg:px-16 bg-gray-100 rounded-xl text-black shadow-xl'>

        {/* <FaLock className='size-8' /> */}
        <h2 className=' mx-auto text-center text-4xl lg:text-5xl tracking-tight font-extrabold'>
            {/* Protect Your Data. */}
            Any LLM, Anywhere.
        </h2>


        <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-[600px]'>
            {/* {`Host a model on-prem, or communicate directly with your favorite provider. Unlike other editors, you never have to send us your data.`} */}
            {/* {`Host your own models locally, or communicate directly with your favorites. Void is open source and fully customizable.`} */}
            {/* {`Host your own models locally, or communicate directly with your favorites. Void is fully `} */}
            {`Host your own models locally, or communicate directly with your favorites.  `}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2  justify-items-center gap-x-8 lg:gap-x-16 gap-y-6'>
            {/* Box 1 */}
            <div className='rounded-sm gap-8 w-full flex flex-col justify-start shadow-md bg-gray-200 p-8 space-y-6'>
                <div className='text-center text-3xl font-black'>
                    Host Locally
                </div>


                <div className=" mx-auto w-fit grid grid-cols-5 max-w-[500px] place-items-center grayscale">
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center  isolate shadow-xl rounded-lg overflow-hidden border border-gray-300/40'><img src="/ollama.png" alt="OpenAI Logo" className="h-10 sm:h-20 w-auto brightness-50" /></div>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center  isolate shadow-xl rounded-lg overflow-hidden border border-gray-300/40'><img src="/meta.svg" alt="big picture" className=" w-10 sm:w-20 h-auto brightness-50" /></div>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center  isolate shadow-xl rounded-lg overflow-hidden border border-gray-300/40'><img src="/ms.png" alt="big picture" className="h-10 sm:h-20 w-auto brightness-50 p-2" /></div>

                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center  isolate shadow-xl rounded-lg overflow-hidden border border-gray-300/40'><img src="/google.png" alt="big picture" className="h-10 sm:h-20 w-auto brightness-50 p-2" /></div>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center  isolate shadow-xl rounded-lg overflow-hidden border border-gray-300/40'><img src="/mistral_small.png" alt="mistral" className="h-10 sm:h-20 w-auto brightness-50" /></div>
                </div>

                <div className=' text-balance mx-auto text-center max-w-[80%] text-gray-500'>
                    {/* {`Integrate with tools like Ollama to host quality models locally. Never run out of API credits again.`} */}
                    {`Never run out of API credits again. We offer tools like Ollama to host quality models locally.`}

                </div>
            </div>

            {/* <div className='self-center my-4 text-gray-400'>OR</div> */}

            {/* Box 2 */}
            <div className='rounded-sm gap-8 w-full flex flex-col justify-start shadow-md bg-gray-200 p-8 max-sm:px-2 space-y-6'>
                <div className='text-center text-3xl font-black'>
                    Go Direct
                </div>


                <div className='flex gap-2 items-center justify-center grayscale  '>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center shadow-xl rounded-lg overflow-hidden'><img src="/claude-icon.png" alt="Claude Logo" className='max-w-32 w-full md:p-2 p-1 isolate brightness-50' /></div>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center shadow-xl rounded-lg overflow-hidden'><img src="/openai-logomark.png" alt="OpenAI Logo" className='max-w-32 w-full md:p-2 p-1 brightness-50' /></div>
                    <div className='size-14 sm:size-28 bg-white flex justify-center items-center shadow-xl rounded-lg overflow-hidden'><img src="/gemini.png" alt="Gemini Logo" className='max-w-32  w-full md:p-3 p-1 brightness-50' /></div>

                </div>

                <div className=' text-balance mx-auto text-center text-gray-500 max-w-[80%]'>
                    {/* {`BYOK and communicate directly with Claude, GPT, or Gemini. `} */}

                    {`Send direct to Claude, GPT, or Gemini. Unlike other editors, we don't act as a middleman to your LLM calls.`}
                    {/* {`Send direct to Claude, GPT, or Gemini. Unlike other editors, you never send us your data.`} */}
                </div>
            </div>
        </div>





    </section>




}

const Wave = ({ isExitWave = false }: { isExitWave?: boolean }) => {
    return <div className={`overflow-hidden ${isExitWave ? '' : 'pt-20'}`}>
        <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-full ${isExitWave ? '' : 'rotate-180'} scale-x-150 translate-x-[0] fill-slate-200`}>
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path>
        </svg>
    </div>
}



const CoreFeatures = () => {

    // const imgClassName = `
    //     inset-0 
    //     border-t-8 border-t-white/40
    //     border-l-8 border-l-white/40
    //     border-b-8 border-b-black/30
    //     border-r-8 border-r-black/30
    // `

    return <section className='py-16 lg:py-32 px-8 lg:px-16 gap-16 my-32 bg-gray-100 flex flex-col items-center justify-center rounded-xl text-black shadow-xl'>


        <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
            {/* {`The AI Feature Classics.`} */}
            {/* {`Native AI Integrations.`} */}
            {`The AI Features You Love.`}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <BigContent src='/demos/autocomplete3.png' title={`Tab`} desc={`Press 'Tab' to apply autocomplete.`} />
            <BigContent src='/demos/inline4.png' title={`Ctrl + K`} desc={`Edit your selection inline.`} />
            <BigContent src='/demos/sidebar4.png' title={`Ctrl + L`} desc={`Ask questions and include files. `} />

        </div>

    </section>

}

const ALotMoreFeatures = () => {
    return <div className='py-20 space-y-20'>
        <div>
            <h2 className='mx-auto text-center text-4xl lg:text-5xl tracking-tight font-black'>
                {/* {`All you could ask for.`} */}
                {/* {`And Much More.`} */}
                {/* {"Features."} */}
                {"Community Features."}
            </h2>
            <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-2xl my-8'>
                {`Anyone can advance our Roadmap or build their own AI integration.`}
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-stretch max-w-[1200px] mx-auto">
                <GridElement name='Index your Files.' src='/demos/filesystemunderstanding.png' />
                <GridElement name='Intelligent Search With AI.' src='/demos/textcolor.png' />
                <GridElement name='Fine-Tuned Generation (e.g. Docstrings).' src='/demos/docstring.png' />
                <GridElement name='View and Edit Underlying Prompts.' src='/demos/viewprompt.png' />
            </div>
        </div>


        <div>
            <h2 className='mx-auto text-center text-4xl lg:text-5xl tracking-tight font-black mt-20'>
                {/* {`All you could ask for.`} */}
                {/* {`And Much More.`} */}
                {/* {"Features."} */}
                {"Experimental Features."}
            </h2>
            <div className='mx-auto text-center max-sm:text-base text-lg max-w-2xl my-8'>
                {/* {`We're experimenting with  `}
                {` advanced `}
                {` AI features. `} */}
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-stretch max-w-[1200px] mx-auto">
                <GridElement name='Fast Apply, even on 1000-line Files.' src='/demos/instant.png' />
                <GridElement name='Contextual Awareness.' src='/demos/techstack.png' />
                <div className='flex flex-col items-center mx-auto justify-center pt-5'>
                    <div className='text-center text-xl font-semibold pb-4'>
                        {`Third Party Integrations.`}
                    </div>
                    <div className='max-h-[300px] max-w-full rounded-lg border aspect-video flex items-center bg-[#252526] text-gray-200 shadow-xl py-2'>
                        <div className=''>
                            <div className='text-center px-4 text-balance max-sm:text-xs'>
                                {`We're building native support for codebase chat (Greptile), local hosting (Ollama), documentation search (DocSearch), and more.`}
                            </div>
                            <div className='bg-white mx-10 py-2 my-4 rounded-sm'>
                                <div className='flex justify-center items-center overflow-hidden grayscale brightness-0 gap-2 sm:gap-10'>
                                    <img src="/greptile.png" alt="Greptile Logo" className="h-14 md:h-24 w-auto p-2" />
                                    <img src="/ollama.png" alt="Ollama Logo" className="h-14 md:h-24 w-auto p-2" />
                                    <img src="/docsearch.svg" alt="Docsearch Logo" className="h-14 md:h-24 w-auto p-3 pl-7" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center mx-auto justify-center pt-5'>
                    <div className='text-center text-xl font-semibold pb-4'>
                        {`And More...`}
                    </div>
                    <div className='max-h-[300px] max-w-full rounded-lg border aspect-video flex items-center bg-[#252526] text-gray-200 shadow-xl py-2'>
                        <div className=''>
                            <div className='text-center px-4 text-balance'>
                                {`If you're building in AI, `}
                                <a href={emailLink} target='_blank' rel="noreferrer noopener nofollow"
                                    className='underline font-bold'>
                                    get in touch
                                </a>
                                {` to discuss integrating with Void.`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

const PoweredByVscode = () => {
    return <section className='w-full h-fit py-16 border mt-32 mb-20 flex flex-col items-center justify-center gap-8 rounded-xl text-black shadow-xl bg-gray-100'>

        <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
            <div className='flex justify-center items-center '>
                {`Powered by VS Code.`}
            </div>
        </h2>

        <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-[600px]'>
            <div className='text-center px-4 text-balance'>
                {`Void is a fork of VS Code. We let you transfer over all your themes, keybinds, and settings in one click. `}
            </div>
        </div>
        <div className='flex items-center gap-8'>
            <VscVscode className='size-20 fill-black/80' />
            <FaArrowsLeftRight className='size-6' />
            <Image className='ml-2' src={process.env.NEXT_PUBLIC_LOGO_URL!} alt={`A slice of the void`} height={70} width={70} />
        </div>

    </section>
}
// const InterestedInContributing = () => {
//     return <section className='w-full h-fit py-16 border mt-32 mb-20 flex flex-col items-center justify-center gap-8 rounded-xl text-black shadow-xl bg-gray-100'>

//         <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
//             <div className='flex justify-center items-center '>
//                 {`Interested in Contributing?`}
//             </div>
//         </h2>

//         <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-[600px]'>
//             <div className='text-center px-4 text-balance'>
//                 {`Join our Discord community to get in touch`}
//             </div>
//         </div>
//         <div className='flex items-center gap-8'>
//             <VscVscode className='size-20 fill-black/80' />
//             {/* <FaArrowsLeftRight className='size-6' /> */}
//             {/* <Image src={process.env.NEXT_PUBLIC_LOGO_URL!} alt={`A slice of the void`} height={70} width={70} /> */}
//         </div>

//     </section>
// }



const GetStartedWithVoid = () => {
    return <div className='my-40 overflow-hidden shadow-xl px-5 relative min-h-[600px] bg-gray-800 flex items-center justify-center gap-12 rounded-xl'>

        <div className="absolute inset-0 z-0 w-full h-full scale-[1] transform opacity-0 lg:opacity-[50%] [mask-image:linear-gradient(#ffff, transparent, 75%)] pointer-events-none select-none bg-[length:100%]" style={{ mixBlendMode: "overlay", backgroundImage: `url(${process.env.NEXT_PUBLIC_BG_NOISE_IMG!})` }} />


        <div className='w-full  max-w-7xl flex flex-1 flex-col items-center justify-center lg:flex-row lg:gap-16 gap-4'>
            <div className='w-full  flex-1 flex-grow-[.75] flex flex-col items-center justify-center text-center p-6 gap-12'>

                {/* <Image className='brightness-110 max-lg:-top-20 inset-0 mx-auto' src='/void/logo_cube_noshadow.png' alt={`A slice of the void`} height={80} width={80} /> */}

                <h1 className='  text-center font-extrabold tracking-tighter leading-tight hover:brightness-110 transition duration-200'>
                    <span className='text-white drop-shadow-xl text-3xl font-bold tracking-tighter'>
                        Get Started with Void.
                    </span>
                </h1>


                <div className='isolate space-y-4'>
                    <StarOnGithubButton posthogLabel="3" />
                    <JoinWaitlistButton posthogLabel="3" />
                </div>

            </div>

        </div>

    </div>
}

export default function LandingPage() {


    return (<>
        {/* <Diff /> */}
        {/* <X /> */}


        <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12 '>
            <Fold />
            <CoreFeatures />
            <PoweredByVscode />
        </div>

        <Wave />
        <div className='bg-slate-200'>
            <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12'>
                <ALotMoreFeatures />
            </div>
        </div>
        <Wave isExitWave={true} />

        <div className='relative max-w-[1400px] mx-auto px-4 lg:px-12'>
            <DataPrivacy />
            {/* <InterestedInContributing /> */}
            <GetStartedWithVoid />
        </div>
    </>)
}

