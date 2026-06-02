'use client';

import React from 'react';
import { githubLink } from '@/components/links';
import { FaApple, FaWindows } from 'react-icons/fa';
import './twinkle.css'
import Image from 'next/image';
import SparkleOverlay from './SparkleOverlay';






// Floating Element
const FloatingElement = () => (
    <div className='relative flex flex-col items-center'>
        <div className='animate-float'>
            <Image
                width={23 * 4 * 1.5}
                height={24 * 4 * 1.5}
                draggable={false}
                src='/void/logo_cube_noshadow.png'
                alt='Slice of the Void logo'
            />
        </div>
        <svg
            className='absolute -bottom-6 opacity-20 animate-shadow'
            width='75'
            height='22.5'
            viewBox='-9 -3 54 15'
        >
            <defs>
                <filter id='blur' x='-50%' y='-50%' width='300%' height='300%'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='2.25' />
                </filter>
            </defs>
            <ellipse cx='18' cy='4.5' rx='18' ry='4.5' fill='black' filter='url(#blur)' />
        </svg>
    </div>
);

// Download button
const DownloadButton = ({ children, className, onClick }: { children: React.ReactNode; className: string; onClick: () => void }) => (
    <button
        type='button'
        draggable={false}
        tabIndex={0}
        className={`group gap-2 flex justify-center items-center drop-shadow-xl p-2 py-3 rounded-lg btn px-8 opacity-90 whitespace-nowrap border-0 
        bg-black/95 hover:bg-black/90 hover:brightness-105 active:brightness-105 active:scale-95 duration-200 outline-none cursor-pointer ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

// Actual page content (Client Component with data hydration)
function DownloadBetaClient() {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState(false);
    const openDownloadModal = () => setIsDownloadModalOpen(true);
    const closeDownloadModal = () => setIsDownloadModalOpen(false);

    React.useEffect(() => {
        if (!isDownloadModalOpen) return;

        const closeDownloadModalOnEscape = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return;

            setIsDownloadModalOpen(false);
        };

        document.addEventListener('keydown', closeDownloadModalOnEscape);
        return () => document.removeEventListener('keydown', closeDownloadModalOnEscape);
    }, [isDownloadModalOpen]);

    // Old download locations:
    // windows x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-x64-${releaseVersion}.exe`
    // windows arm: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-arm64-${releaseVersion}.exe`
    // mac intel: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.x64.${releaseVersion}.dmg`
    // mac appleSilicon: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.arm64.${releaseVersion}.dmg`
    // linux x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void-${releaseVersion}.glibc2.29-x86_64.AppImage`

    return (
        <main className='min-h-screen relative max-w-[1400px] mx-auto px-4 lg:px-12'>
            <section className='h-fit py-16 mt-4 sm:mt-32 flex flex-col md:flex-row items-center justify-center gap-x-8 rounded-xl text-black shadow-xl bg-gray-100'>
                {/* left */}
                <div className='text-balance max-sm:text-base text-xl max-w-[600px] space-y-5'>
                    <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
                        <div className='flex justify-center items-center '>Download Void.</div>
                    </h2>

                    <div className='mx-auto pb-4 text-center px-4 text-balance max-w-[400px]'>
                        Try the beta edition of Void, or check out the source on {' '}
                        <a href={githubLink} target='_blank' rel='noreferrer noopener nofollow' className='underline'>
                            GitHub
                        </a>
                        .
                    </div>

                    <div className='px-4 max-sm:scale-75 max-[450px]:scale-50 space-y-2'>
                        <div className='flex items-center gap-x-2'>
                            <DownloadButton onClick={openDownloadModal} className='relative w-full'>
                                <SparkleOverlay number={25} seed={42} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Download for Mac</span>
                                    <FaApple className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                            <DownloadButton onClick={openDownloadModal} className='relative flex-grow-0 flex-shrink-0 w-40'>
                                <SparkleOverlay number={15} seed={501} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Intel</span>
                                    <FaApple className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <DownloadButton onClick={openDownloadModal} className='relative w-full'>
                                <SparkleOverlay number={25} seed={43} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Download for Windows</span>
                                    <FaWindows className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                            <DownloadButton onClick={openDownloadModal} className='relative flex-grow-0 flex-shrink-0 w-40'>
                                <SparkleOverlay number={15} seed={100} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>ARM</span>
                                    <FaWindows className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                        </div>
                    </div>

                </div>

                {/* right */}
                <div className='min-w-60 min-h-60 flex justify-center items-center'>
                    <FloatingElement />
                </div>
            </section>

            {/* desc */}
            <div className='mx-auto text-center px-4 text-balance opacity-25 pt-60 pb-40'>
                <div className='my-1'>
                    For Linux users, download Void{' '}
                    <button type='button' onClick={openDownloadModal} className='underline bg-transparent border-0 p-0 cursor-pointer text-inherit'>
                        here
                    </button>
                    .
                </div>
                <div className='my-1'>
                    Alternatively, download Void from the source on{' '}
                    <button type='button' onClick={openDownloadModal} className='underline bg-transparent border-0 p-0 cursor-pointer text-inherit'>
                        GitHub
                    </button>
                    .
                </div>
            </div>

            {isDownloadModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4' onClick={closeDownloadModal}>
                    <div
                        role='dialog'
                        aria-modal='true'
                        aria-labelledby='download-modal-title'
                        aria-describedby='download-modal-description'
                        className='relative w-full max-w-[420px] rounded-lg bg-white p-6 text-center text-black shadow-2xl'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h3 id='download-modal-title' className='text-2xl font-black tracking-tight'>
                            Void is deprecated.
                        </h3>
                        <p id='download-modal-description' className='mt-3 text-base text-balance'>
                            Void is no longer maintained. You can download past versions on GitHub{' '}
                            <a href={githubLink} target='_blank' rel='noreferrer noopener nofollow' className='underline font-semibold'>
                                here
                            </a>
                            .
                        </p>
                        <button
                            type='button'
                            onClick={closeDownloadModal}
                            className='mt-5 rounded-lg bg-black px-5 py-2 text-white hover:bg-black/90 active:scale-95 duration-200'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default function DownloadBetaPage() {
    return <DownloadBetaClient />;
}
