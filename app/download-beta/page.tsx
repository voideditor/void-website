'use client'
/* eslint-disable @next/next/no-img-element */

import { discordLink, downloadOfOS, releaseLink } from '@/components/links';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';


import Image from 'next/image';
import posthog from 'posthog-js';
import { SparkleOverlay } from '@/components/ui/sparke';

const DownloadButton = ({ url, tag, defaultFileName = 'Void-Installer', children, className }: { url: string, tag: string, defaultFileName?: string, children: React.ReactNode, className?: string }) => {
    return (
        <a
            draggable={false}
            tabIndex={0}
            className={`group px-8 py-4 rounded-md bg-black text-white dark:bg-white/80 dark:text-black font-medium text-lg
            hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 relative overflow-hidden ${className}`}
            href={url}
            onClick={() => { posthog.capture('Click Download', { url, tag }) }}
        >
            <span className="relative z-10 flex justify-center items-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
    );
};





const FloatingElement = () => {
    return (
        <div className='relative flex flex-col items-center scale-[150%]'>

            {/* Floating image */}
            <div className='animate-float'>
                <Image
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
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="min-h-screen flex flex-col relative overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:4rem_4rem]">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
                </div>

                <main className="relative max-w-6xl mx-auto px-4 pt-24 pb-40">
                    <section className="space-y-16 animate-fade-in">
                        {/* Title */}
                        <div className="text-center space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
                                Download Void
                            </h1>
                            <p className="text-black/60 dark:text-white/60 text-xl max-w-2xl mx-auto">
                                Try the beta edition of Void, and help us improve by providing{' '}
                                <a href={discordLink} target="_blank" rel="noreferrer noopener nofollow"
                                    className="text-black dark:text-white underline hover:opacity-80 transition-opacity">
                                    feedback
                                </a>!
                            </p>
                        </div>

                        {/* Download buttons */}
                        <div className="max-w-2xl mx-auto space-y-4">
                            <div className="flex items-center gap-4">
                                <DownloadButton url={downloadOfOS.mac.appleSilicon} tag="darwin-arm64" className="relative w-full">
                                    <SparkleOverlay number={25} seed={42} />
                                    <span>Download for Mac</span>
                                    <FaApple className="w-6 h-6" />
                                </DownloadButton>

                                <DownloadButton url={downloadOfOS.mac.intel} tag="darwin-x64" className="relative w-40 flex-shrink-0">
                                    <SparkleOverlay number={10} seed={47} />
                                    <span>Intel</span>
                                    <FaApple className="w-6 h-6" />
                                </DownloadButton>
                            </div>

                            <div className="flex items-center gap-4">
                                <DownloadButton url={downloadOfOS.windows.x64} tag="win32-x64" className="relative w-full">
                                    <SparkleOverlay number={25} seed={43} />
                                    <span>Download for Windows</span>
                                    <FaWindows className="w-6 h-6" />
                                </DownloadButton>
                            </div>
                        </div>

                        {/* Floating logo */}
                        <div className="mt-20">
                            <FloatingElement />
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="mt-32 text-center">
                        <p className="text-black/40 dark:text-white/40">
                            Alternatively, download Void from the source on{' '}
                            <a href={releaseLink} target="_blank" rel="noreferrer noopener nofollow"
                                className="underline hover:text-black/60 dark:hover:text-white/60 transition-colors">
                                GitHub
                            </a>.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DownloadBetaPage



