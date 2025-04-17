/* eslint-disable @next/next/no-img-element */

import { discordLink, releaseLink } from '@/components/links';
import { FaApple, FaWindows } from 'react-icons/fa';
import './twinkle.css'
import Image from 'next/image';
import SparkleOverlay from './SparkleOverlay';








// Add this top-level cache (outside the function)
let cachedVersion: string | null = null;
let lastChecked: number = 0; // epoch ms
const TTL = 15 * 60 * 1000; // 15 minutes

// All required asset filenames (can be regex or exact)
const REQUIRED_ASSETS = [
    (v: string) => `VoidSetup-x64-${v}.exe`,
    (v: string) => `VoidSetup-arm64-${v}.exe`,
    (v: string) => `Void.x64.${v}.dmg`,
    (v: string) => `Void.arm64.${v}.dmg`,
    // (v: string) => `Void-${v}.glibc2.29-x86_64.AppImage`,
];

// Server-side helper
async function getLatestReleaseVersion(): Promise<string> {
    const now = Date.now();
    if (cachedVersion && now - lastChecked < TTL) {
        return cachedVersion;
    }

    try {
        const response = await fetch('https://api.github.com/repos/voideditor/binaries/releases/latest', {
            // Avoid Next.js caching here—we handle our own
            cache: 'no-store',
        });

        if (response.ok) {
            const data = await response.json();
            const version = data.tag_name;
            const assetNames: string[] = data.assets.map((a: any) => a.name);

            const allAssetsExist = REQUIRED_ASSETS.every((makeName) =>
                assetNames.includes(makeName(version))
            );

            if (allAssetsExist) {
                cachedVersion = version;
                lastChecked = now;
                return version;
            } else {
                console.warn('Some expected assets are missing in latest release');
            }
        }
    } catch (e) {
        console.error('Failed to fetch latest release:', e);
    }

    return cachedVersion ?? '1.2.0.25104';
}






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
const DownloadButton = ({ url, children, className }: { url: string; children: React.ReactNode; className?: string }) => (
    <a
        draggable={false}
        tabIndex={0}
        className={`group gap-2 flex justify-center items-center drop-shadow-xl p-2 py-3 rounded-lg btn px-8 opacity-90 whitespace-nowrap border-0 
        bg-black/95 hover:bg-black/90 hover:brightness-105 active:brightness-105 active:scale-95 duration-200 outline-none cursor-pointer ${className}`}
        href={url}
    >
        {children}
    </a>
);

// Actual page content (Client Component with data hydration)
function DownloadBetaClient({ releaseVersion }: { releaseVersion: string }) {
    const downloadLinks = {
        windows: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-x64-${releaseVersion}.exe`,
            arm: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-arm64-${releaseVersion}.exe`,
        },
        mac: {
            intel: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.x64.${releaseVersion}.dmg`,
            appleSilicon: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.arm64.${releaseVersion}.dmg`,
        },
        linux: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void-${releaseVersion}.glibc2.29-x86_64.AppImage`,
        },
    };

    return (
        <main className='min-h-screen relative max-w-[1400px] mx-auto px-4 lg:px-12'>
            <section className='h-fit py-16 mt-4 sm:mt-32 flex flex-col md:flex-row items-center justify-center gap-x-8 rounded-xl text-black shadow-xl bg-gray-100'>
                {/* left */}
                <div className='text-balance max-sm:text-base text-xl max-w-[600px] space-y-5'>
                    <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black'>
                        <div className='flex justify-center items-center '>Download Void.</div>
                    </h2>

                    <div className='mx-auto pb-4 text-center px-4 text-balance max-w-[400px]'>
                        Try the beta edition of Void, and help us improve by providing{' '}
                        <a href={discordLink} target='_blank' rel='noreferrer noopener nofollow' className='underline'>
                            feedback
                        </a>
                        .
                    </div>

                    <div className='px-4 max-sm:scale-75 max-[450px]:scale-50 space-y-2'>
                        <div className='flex items-center gap-x-2'>
                            <DownloadButton url={downloadLinks.mac.appleSilicon} className='relative w-full'>
                                <SparkleOverlay number={25} seed={42} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Download for Mac</span>
                                    <FaApple className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                            <DownloadButton url={downloadLinks.mac.intel} className='relative flex-grow-0 flex-shrink-0 w-40'>
                                <SparkleOverlay number={15} seed={501} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Intel</span>
                                    <FaApple className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <DownloadButton url={downloadLinks.windows.x64} className='relative w-full'>
                                <SparkleOverlay number={25} seed={43} />
                                <span className='flex items-center gap-2'>
                                    <span className='text-white text-xl font-medium'>Download for Windows</span>
                                    <FaWindows className='fill-white min-w-7 min-h-7' />
                                </span>
                            </DownloadButton>
                            <DownloadButton url={downloadLinks.windows.arm} className='relative flex-grow-0 flex-shrink-0 w-40'>
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
                {/* <div className='my-1'>
                    For Linux users, download Void{' '}
                    <a href={downloadLinks.linux.x64} target='_blank' rel='noreferrer noopener nofollow' className='underline'>
                        here
                    </a>
                    .
                </div> */}
                <div className='my-1'>
                    Alternatively, download Void from the source on{' '}
                    <a href={releaseLink} target='_blank' rel='noreferrer noopener nofollow' className='underline'>
                        GitHub
                    </a>
                    .
                </div>
            </div>
        </main>
    );
}

export default async function DownloadBetaPage() {
    const releaseVersion = await getLatestReleaseVersion();

    return <DownloadBetaClient releaseVersion={releaseVersion} />;
}