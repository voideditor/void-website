/* eslint-disable @next/next/no-img-element */

import { discordLink, releaseLink } from '@/components/links';
import { FaApple, FaWindows } from 'react-icons/fa';
import './twinkle.css'
import Image from 'next/image';
// Import the SparkleOverlay component
import SparkleOverlay from './SparkleOverlay';
import { useEffect, useState } from 'react';


const DownloadButton = ({ url, children, className }: { url: string, children: React.ReactNode, className?: string }) => {
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
        >
            {children}
        </a>
    );
};


const FloatingElement = () => {
    return (
        <div className='relative flex flex-col items-center'>
            {/* Floating image - increased dimensions by 150%  */}
            <div className='animate-float'>
                <Image
                    width={23 * 4 * 1.5}  // 150% of original width
                    height={24 * 4 * 1.5}  // 150% of original height
                    draggable={false}
                    src='/void/logo_cube_noshadow.png'
                    alt='Slice of the Void logo'
                />
            </div>

            {/* Shadow SVG - increased dimensions by 150% */}
            <svg
                className='absolute -bottom-6 opacity-20 animate-shadow'  // -bottom-6 instead of -bottom-4
                width='75'  // 50 * 1.5 = 75
                height='22.5'  // 15 * 1.5 = 22.5
                viewBox='-9 -3 54 15'  // scaled viewBox (-6 * 1.5, -2 * 1.5, 36 * 1.5, 10 * 1.5)
            >
                <defs>
                    <filter id='blur' x='-50%' y='-50%' width='300%' height='300%'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='2.25' />  {/* 1.5 * 1.5 = 2.25 */}
                    </filter>
                </defs>
                <ellipse
                    cx='18'  // 12 * 1.5 = 18
                    cy='4.5'  // 3 * 1.5 = 4.5
                    rx='18'  // 12 * 1.5 = 18
                    ry='4.5'  // 3 * 1.5 = 4.5
                    fill='black'
                    filter='url(#blur)'
                />
            </svg>
        </div>
    );
};



// Function to get the latest release version server-side
async function getLatestReleaseVersion() {
    try {
        const response = await fetch('https://api.github.com/repos/voideditor/binaries/releases/latest', {
            cache: 'no-store' // Don't cache this request
        });

        if (response.ok) {
            const data = await response.json();
            return data.tag_name;
        }
    } catch (error) {
        console.error('Failed to fetch latest release:', error);
    }

    // Fallback version if fetch fails
    return '1.2.0.25104';
}

// TODO need to add this to opengraph, sitemap, metdata, etc, it's 100% private right now
const DownloadBetaPage = async () => {
    // Fetch the latest release version on the server
    const [releaseVersion, setReleaseVersion] = useState('')
    const [update, setUpdate] = useState(0)

    useEffect(() => {
        const i = setInterval(() => setUpdate(v => v + 1), 1000 * 15 * 60) // every 15 min, re-fetch
        return () => clearInterval(i)
    }, [])

    useEffect(() => {
        getLatestReleaseVersion()
            .then(r => setReleaseVersion(r))
            .catch((e) => console.log('Error', e))
    }, [update])

    // Define download links with dynamic release version
    const downloadLinks = {
        windows: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidUserSetup-x64-${releaseVersion}.exe`,
            arm: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-arm64-${releaseVersion}.exe`,
        },
        mac: {
            intel: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.x64.${releaseVersion}.dmg`,
            appleSilicon: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.arm64.${releaseVersion}.dmg`,
        },
        linux: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void-${releaseVersion}.glibc2.29-x86_64.AppImage`,
            // arm: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/void_${releaseVersion}_arm64.deb`,
        }
    };

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
                    {`Try the beta edition of Void for free, and provide `}
                    <a href={discordLink} target='_blank' rel="noreferrer noopener nofollow"
                        className='underline'>
                        feedback
                    </a>.
                </div>

                {/* buttons */}
                <div className='px-4 max-sm:scale-75 max-[450px]:scale-50 space-y-2'>

                    <div className='flex items-center gap-x-2'>
                        <DownloadButton url={downloadLinks.mac.appleSilicon} className='relative w-full'>
                            <SparkleOverlay number={25} seed={42} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Download for Mac
                                </span>
                                <FaApple className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>

                        <DownloadButton url={downloadLinks.mac.intel} className='relative w-40 flex-grow-0 flex-shrink-0'>
                            <SparkleOverlay number={15} seed={501} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Intel
                                </span>
                                <FaApple className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <DownloadButton url={downloadLinks.windows.x64} className='relative w-full'>
                            <SparkleOverlay number={25} seed={43} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    Download for Windows
                                </span>
                                <FaWindows className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>

                        <DownloadButton url={downloadLinks.windows.arm} className='relative w-40 flex-grow-0 flex-shrink-0'>
                            <SparkleOverlay number={15} seed={100} />
                            <span className='flex items-center gap-2'>
                                <span className='text-white text-xl font-medium'>
                                    ARM
                                </span>
                                <FaWindows className='fill-white min-w-7 min-h-7' />
                            </span>
                        </DownloadButton>
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
            <div className='my-1'>
                {`For Linux users, download Void `}
                <a href={downloadLinks.linux.x64} target='_blank' rel="noreferrer noopener nofollow" className='underline'>
                    here
                </a>.
            </div>

            <div className='my-1'>
                {`You can also download Void from the source on `}
                <a href={releaseLink} target='_blank' rel="noreferrer noopener nofollow" className='underline'>
                    GitHub
                </a>{`.`}
            </div>
        </div>

    </main>
}

export default DownloadBetaPage



