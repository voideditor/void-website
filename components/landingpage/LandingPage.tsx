/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { FaArrowsAlt, FaCheck, FaChevronLeft, FaChevronRight, FaDiscord, FaDotCircle, FaExternalLinkSquareAlt, FaEye, FaLink, FaLock, FaStar } from 'react-icons/fa';
import { FaArrowsLeftRight } from 'react-icons/fa6';

import { VscVscode } from 'react-icons/vsc'
import { StarOnGithubButton, DownloadButton } from '@/app/Buttons';
import Image from 'next/image';
import { discordLink, emailLink } from '../links';
import { Hammer, Apple } from 'lucide-react'


const BigContent = ({ title, desc, src, children, imgClassName = '' }: { title: string, desc: React.ReactNode, src: string, children?: React.ReactNode, imgClassName?: string }) => {
    return <div className={`flex flex-col items-center`}>
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
            className={`bg-[#1e1e1e] aspect-[16_10] max-w-[300px] lg:max-w-[400px] w-full h-full rounded-xl object-contain ${imgClassName}`}
        />
        {children}
    </div>
}

const ProviderLogo = ({
    src,
    alt,
    name,
    className,
    size,
}: {
    src: string;
    alt: string;
    name: string;
    className?: string;
    size: 'sm' | 'lg';
}) => {
    // Remove this line

    return (
        <>
            <div
                data-tooltip-id={`tooltip-${name.toLowerCase().replace(/\s+/g, '-')}`}
                data-tooltip-content={name}
                className={`
                    ${size === 'lg' ?
                        'size-14 sm:size-28'
                        : 'size-14 sm:size-20'
                    }
                    bg-white
                    flex justify-center items-center shadow-xl
                     rounded-lg overflow-hidden border border-gray-300/40 relative transition-transform
                      duration-200 hover:-translate-y-1`}
            >
                <img src={src} alt={alt} className={`${className}`} />
            </div>
            <Tooltip
                id={`tooltip-${name.toLowerCase().replace(/\s+/g, '-')}`}
                place="top"
                className="bg-black/90 text-white text-xs px-3 py-1.5 rounded-md z-50"
                delayShow={100}
            />
        </>
    );
};


const GridElement = ({ name, src = undefined, alt = undefined, children, imageClassName = '' }: { name: string | null, src?: string, alt?: string, children?: React.ReactNode, imageClassName?: string }) => {

    let childContents: React.ReactNode
    if (children) {
        childContents = children
    }
    else {
        const theAlt = alt ?? name

        if (theAlt === null)
            throw new Error('GridElement: name was null')

        childContents = <div className="w-full h-[300px] flex items-center justify-center">
            <img src={src ?? '/noise/3.png'} alt={theAlt} className={`max-h-[300px] max-w-full w-auto h-auto rounded-lg object-contain ${imageClassName}`} />
        </div>
    }

    return <>
        <div className="py-4">
            <div>
                {name ? <div className='text-center text-xl font-semibold pb-4'>{name}</div> : null}

                <div className='flex items-center justify-center bg-[#252526] rounded-lg'>
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
                    <DownloadButton posthogLabel="3" />
                    <StarOnGithubButton posthogLabel="2" />
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




const Wave = ({ isExitWave = false }: { isExitWave?: boolean }) => {
    return <div className={`overflow-hidden ${isExitWave ? '' : ''}`}>
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
            {/* <BigContent src='/demos2/aa.png' title={`Quick Edit`} desc={`Edit your selection inline.`} /> */}
            {/* <BigContent src='/demos2/AgentMode.png' title={`Chat`} desc={`Agent, Gather, and Normal mode. `} /> */}
            <BigContent src='/demos/cmdK1.png' title={`Quick Edit`} desc={`Edit your selection inline.`} />
            {/* <BigContent src='/demos/chat5.png' imgClassName='py-12 bg-[#252526]' title={`Chat`} desc={`Agent, Gather, and Normal mode. `} /> */}
            <BigContent src='/demos2/AgentMode.png' imgClassName='p-8 bg-[#1e1e1e]' title={`Chat`} desc={`Agent Mode, Gather Mode, and normal chat. `} />

        </div>

    </section>

}

const ALotMoreFeatures = () => {
    return <div className='py-20 space-y-40'>
        <div>
            <h2 className='mx-auto text-center text-4xl lg:text-5xl tracking-tight font-black'>
                {/* {`All you could ask for.`} */}
                {/* {`And Much More.`} */}
                {/* {"Features."} */}
                {"Any LLM, Anywhere."}
            </h2>
            <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-2xl my-8'>
                {`Void doesn't send your messages through a private backend like Cursor or Windsurf. Cut out the middleman and connect directly.`}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-8 lg:gap-x-16 gap-y-6'>
                {/* Box 1 */}
                <div className='rounded-md gap-8 w-full flex flex-col justify-start bg-slate-100 p-8 space-y-6'>
                    <div className='text-center text-3xl font-black'>
                        Private LLMs
                    </div>

                    <div className="mx-auto w-fit grid grid-cols-4 max-w-[500px] place-items-center grayscale px-8" data-tooltip-id="hover-group-local">
                        <ProviderLogo size={'sm'} className='brightness-50 p-1 opacity-[80%] h-10 sm:h-20 ' src="/ollama.png" alt="Ollama Logo" name="Ollama (Provider)" />
                        <ProviderLogo size={'sm'} className='brightness-50  ' src="/deepseek.png" alt="DeepSeek Logo" name="DeepSeek R1, V3" />
                        <ProviderLogo size={'sm'} className='brightness-50 p-2' src="/gemma3.png" alt="gemma" name="Google Gemma 3" />
                        <ProviderLogo size={'sm'} className='brightness-50 w-10 sm:w-20 h-auto' src="/meta.svg" alt="Llama" name="Llama 4" />
                        <ProviderLogo size={'sm'} className='brightness-50 p-2' src="/qwen.png" alt="Qwen Logo" name="Qwen 2.5 Coder, QwQ" />
                        <ProviderLogo size={'sm'} className='brightness-50 p-2' src="/mistral_small.png" alt="mistral" name="Mistral, Codestral" />
                        <ProviderLogo size={'sm'} className='brightness-5 p-4' src="/vllm.png" alt="vLLM Logo" name="vLLM (Provider)" />
                        <ProviderLogo size={'sm'} className='brightness-50 p-3 opacity-[80%]' src="/openai-logomark.png" alt="openai-compatible" name="Any OpenAI-Compatible Endpoint" />
                        {/* dont know what to do with these */}
                        {/* <ProviderLogo size={'sm'} className='brightness-50 p-4' src="/openhands.png" alt="openhands" name="OpenHands LM" /> */}
                        {/* <ProviderLogo size={'sm'} className='brightness-50 p-3' src="/ms.png" alt="microsoft phi" name="Microsoft Phi 4" /> */}
                    </div>

                    <div className='text-balance mx-auto text-center max-w-[80%] text-gray-500'>
                        {`Never run out of API credits again. Host any open source model with Void: DeepSeek, Llama, Gemini, Qwen, and more.`}
                    </div>
                </div>

                {/* Box 2 */}
                <div className='rounded-md gap-8 w-full flex flex-col justify-start bg-slate-100 p-8 max-sm:px-2 space-y-6'>
                    <div className='text-center text-3xl font-black'>
                        Frontier LLMs
                    </div>

                    <div className='flex gap-2 items-center justify-center grayscale' data-tooltip-id="hover-group-online">
                        <ProviderLogo size={'lg'} className='brightness-50 md:p-2 p-1' src="/claude-icon.png" alt="Claude Logo" name="Anthropic" />
                        <ProviderLogo size={'lg'} className='brightness-50 p-1 opacity-[80%]  md:p-2 ' src="/openai-logomark.png" alt="OpenAI Logo" name="OpenAI" />
                        <ProviderLogo size={'lg'} className='brightness-50  md:p-3 p-1 ' src="/gemini.png" alt="Gemini Logo" name="Google Gemini" />
                        <ProviderLogo size={'lg'} className='brightness-50 opacity-[80%]' src="/grok.png" alt="Grok Logo" name="xAI (Grok)" />
                        {/* <ProviderLogo size={'lg'} className='brightness-[30%] p-1' src="/openrouter.png" alt="OpenRouter Logo" name="OpenRouter" /> */}
                    </div>

                    <div className='text-balance mx-auto text-center text-gray-500 max-w-[80%]'>
                        {`Directly connect to any any provider. Use models like Gemini 2.5, Claude 3.7, Grok 3, o4-mini, and Qwen 3. `}
                    </div>
                </div>
            </div>
        </div>


        <div>
            <h2 className='mx-auto text-center text-4xl lg:text-5xl tracking-tight font-black mt-20'>
                {/* {`All you could ask for.`} */}
                {/* {`And Much More.`} */}
                {/* {"Features."} */}
                {"The Latest Features."}
            </h2>
            <div className='mx-auto text-center max-sm:text-base text-lg max-w-2xl my-8'>
                {/* {`We're experimenting with  `}
                {` advanced `}
                {` AI features. `} */}
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-stretch max-w-[1200px] mx-auto">
                {/* <GridElement name='Auto-Apply.' src='/demos/techstack.png' /> */}
                <GridElement imageClassName='px-4 py-4 lg:px-24 lg:py-8' name='Checkpoints for LLM Changes.' src='/demos2/Checkpoints2.png' />
                <GridElement imageClassName='px-4 py-4 lg:px-32 lg:py-4' name='Lint Error Detection.' src='/demos2/LintErrors3.png' />
                <GridElement imageClassName='px-4 py-4 lg:px-20 lg:py-8' name='Native Tool Use.' src='/demos2/GatherMode.png' />
                <GridElement name='Fast Apply, Even on 1000-Line Files.' src='/demos/instant.png' />
                {/* <GridElement name='Checkpoints.' src='/demos/techstack.png' /> */}
                {/* <GridElement name='Auto-Fix Lint Errors.' src='/demos/techstack.png' /> */}
                {/* <GridElement name='Autocomplete with FIM Models (e.g. Qwen 2.5-coder).' src='/demos/techstack.png' /> */}
                {/* <GridElement name='SSH and WSL Support.' src='/demos/techstack.png' />

                <div className='flex flex-col items-center mx-auto justify-center'>
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
                </div> */}
            </div>
        </div>

        <div>
            <h2 className='mx-auto text-center text-4xl lg:text-5xl tracking-tight font-black'>
                {"Agent Mode."}
            </h2>
            <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-2xl my-8'>
                {`Use any model in Agent mode - even open source models that don't natively support tool calling.`}
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto'>
                {/* Agent Mode */}
                <div className='bg-white rounded-xl shadow-lg overflow-hidden px-8 py-12'>
                    <div className='text-center text-3xl font-black mb-6'>
                        Agent Mode
                    </div>
                    {/* <GridElement imageClassName='px-4 py-4 ' name={null} alt='Agent Mode' src='/demos2/LintErrors.png' /> */}
                    <div className='text-balance mx-auto text-center text-gray-600'>
                        {`Agent mode can search, create, edit, and delete files & folders. It also has terminal access.`}
                    </div>
                </div>

                {/* Gather Mode */}
                <div className='bg-white rounded-xl shadow-lg overflow-hidden px-8 py-12'>
                    <div className='text-center text-3xl font-black mb-6'>
                        Gather Mode
                    </div>
                    {/* <GridElement imageClassName='px-4 py-4 ' name={null} alt='Gather Mode' src='/demos2/Links.png' /> */}

                    <div className='text-balance mx-auto text-center text-gray-600'>
                        {`Gather mode is a restricted version of Agent mode that can only read and search, but not modify or edit.`}
                    </div>
                </div>
            </div>
        </div>

    </div>
}

const PoweredByVscode = () => {
    return <section className='w-full h-fit py-16 mt-32 mb-40 
    flex flex-col items-center justify-center gap-8 rounded-xl text-black shadow-xl bg-gray-100
    '>

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
const InterestedInContributing = () => {
    return <section className='w-full h-fit py-16 mt-32 mb-20 flex flex-col items-center justify-center gap-8 rounded-xl text-black shadow-xl bg-gray-100'>

        <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
            <div className='flex justify-center items-center '>
                {`Join The Community`}
            </div>
        </h2>

        <div className='mx-auto text-center text-balance max-sm:text-base text-xl max-w-[700px]'>
            <div className='text-center px-4 text-balance'>
                {`We host weekly contributor meetups in our Discord server and share early releases with our community. Feel free to join!`}
            </div>
        </div>
        <div className='flex items-center justify-center gap-8'>
            <a href={discordLink}>
                <FaDiscord className='size-20 fill-black/80' />
            </a>
        </div>

    </section>
}



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
                    <DownloadButton posthogLabel="3" />
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
            {/* Removed DataPrivacy section from here since it's now part of ALotMoreFeatures */}
            <InterestedInContributing />
            <GetStartedWithVoid />
        </div>

    </>)
}
