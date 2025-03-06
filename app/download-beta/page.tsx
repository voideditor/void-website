'use client'
/* eslint-disable @next/next/no-img-element */

import { discordLink, downloadOfOS, releaseLink } from '@/components/links';
import { useMemo, useState } from 'react';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';


import './twinkle.css'
import Image from 'next/image';
import posthog from 'posthog-js';


const generatePseudoRandomPositions = (numToGenerate: number, seed: number) => {
    const prng = (seed: number) => {
        let value = seed;
        return () => {
            value = (value * 16807) % 2147483647;
            return value / 2147483647;
        };
    };
    const random = prng(seed);
    const positions: { left: number, top: number, startOffset: number, duration: number }[] = [];
    for (let i = 0; i < numToGenerate; i++) {
        positions.push({
            left: random() * 100,
            top: random() * 100,
            startOffset: random() * 1,
            duration: 1.5 + random() * 2,
        });
    }
    return positions;
};


const SparkleOverlay = ({ number, seed }: { number: number, seed: number }) => {
    const sparklePositions = useMemo(() => generatePseudoRandomPositions(number, seed), [number, seed]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparklePositions.map((position, i) => (
                <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full"
                    style={{
                        left: `${position.left}%`,
                        top: `${position.top}%`,
                        animation: `twinkle ${position.duration}s infinite ease-in-out`,
                        animationDelay: `-${position.startOffset * position.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};



const DownloadButton = ({ url, tag, defaultFileName = 'Void-Installer', children, className }: { url: string, tag: string, defaultFileName?: string, children: React.ReactNode, className?: string }) => {

    return (
        <a
            draggable={false}
            tabIndex={0} // part of screen reader tab index
            className={`group gap-2 flex justify-center items-center drop-shadow-xl p-2 py-3 rounded-lg btn px-8 opacity-90 whitespace-nowrap border-0 
            bg-black/95 hover:bg-black/90
             hover:brightness-105 active:brightness-105 active:scale-95 duration-200 border-none outline-none
             cursor-pointer
             ${className}`}
            href={url}
            onClick={() => { posthog.capture('Click Download', { url, tag }) }}
        >
            {children}
        </a>


    );
};





const FloatingElement = () => {
    return (
        <div className='relative flex flex-col items-center scale-[150%]'>

            {/* Floating image */}
            <div className='animate-float'>
                <Image
                    unoptimized={true}
                    width={23 * 4}
                    height={24 * 4}
                    draggable={false}
                    src='/void/logo_cube_noshadow.png'
                    alt='Slice of the Void logo'
                />
            </div>

            {/* Shadow SVG with smaller size and adjusted viewBox */}
            <svg
                className='absolute -bottom-4 opacity-20 animate-shadow'
                width='50'
                height='15'
                viewBox='-6 -2 36 10'
            >
                <defs>
                    <filter id='blur' x='-50%' y='-50%' width='300%' height='300%'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='1.5' />
                    </filter>
                </defs>
                <ellipse
                    cx='12'
                    cy='3'
                    rx='12'
                    ry='3'
                    fill='black'
                    filter='url(#blur)'
                />
            </svg>



        </div>
    );
};



// TODO need to add this to opengraph, sitemap, metdata, etc, it's 100% private right now
const DownloadBetaPage = () => {
    return <main className='min-h-screen relative max-w-[1400px] mx-auto px-4 lg:px-12 '>

        <section className=' h-fit py-16 mt-4 sm:mt-32
        flex flex-col md:flex-row
        items-center justify-center gap-x-8 
        rounded-xl text-black shadow-xl bg-gray-100'>




            {/* left: text */}
            <div className='text-balance max-sm:text-base text-xl max-w-[600px] space-y-5'>
                {/* title */}
                <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
                    <div className='flex justify-center items-center '>
                        {`Download Void.`}
                    </div>
                </h2>

                {/* desc */}
                <div className='mx-auto pb-4 text-center px-4 text-balance max-w-[400px]'>
                    {`Try the beta edition of Void, and help us improve by providing `}
                    <a href={discordLink} target='_blank' rel="noreferrer noopener nofollow"
                        className='underline'>
                        feedback
                    </a>!
                </div>

                {/* buttons */}
                <div className='space-y-4 px-4 max-sm:scale-75 max-[450px]:scale-50'>

                    <div className='flex items-center gap-4'>
                        <DownloadButton url={downloadOfOS.mac.appleSilicon} tag='darwin-arm64' className='relative w-full'>
                            <SparkleOverlay number={25} seed={42} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Download for Mac
                                </span>
                                <FaApple className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>

                        <DownloadButton url={downloadOfOS.mac.intel} tag='darwin-x64' className='relative w-40 flex-grow-0 flex-shrink-0'>
                            <SparkleOverlay number={10} seed={47} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Intel
                                </span>
                                <FaApple className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>
                    </div>

                    <div className='flex items-center gap-4'>
                        <DownloadButton url={downloadOfOS.windows.x64} tag='win32-x64' className='relative w-full'>
                            <SparkleOverlay number={25} seed={43} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Download for Windows
                                </span>
                                <FaWindows className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>
                        {/* <DownloadButton url={downloadOfOS.linux.x64} tag='win32-x64' className='relative w-40 flex-grow-0 flex-shrink-0'>
                            <SparkleOverlay number={25} seed={47} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Linux
                                </span>
                                <FaLinux className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton> */}
                    </div>

                </div>
            </div>

            {/* right: floater */}
            <div className='min-w-60 min-h-60 flex justify-center items-center'>
                <FloatingElement />
            </div>


        </section>


        {/* desc */}
        <div className='mx-auto text-center px-4 text-balance opacity-25 pt-60 pb-40'>
            {`Alternatively, download Void from the source on `}
            <a href={releaseLink} target='_blank' rel="noreferrer noopener nofollow" className='underline'>
                GitHub
            </a>{`.`}
        </div>

    </main>
}

export default DownloadBetaPage



