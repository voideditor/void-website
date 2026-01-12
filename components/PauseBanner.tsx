'use client';

import React from 'react';
import { MdPauseCircle } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { githubLink } from '@/components/links';

export default function PauseBanner() {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;

    return (
        <div className='bg-yellow-50 border-b border-yellow-200 text-yellow-800 cursor-default py-3 px-4 text-center flex items-center justify-center gap-2  sticky top-0 z-50'>
            <MdPauseCircle className="fill-yellow-800 flex-shrink-0 hidden sm:block" />
            <span className='text-balance'>
                Work on Void is currently <a href={githubLink} target="_blank" rel="noreferrer noopener" className="underline hover:text-yellow-900">paused</a>. Some features may be outdated or broken.
            </span>
            <button
                onClick={() => setIsVisible(false)}
                className='absolute right-3 top-1/2 -translate-y-1/2 p-1'
                aria-label="Dismiss banner"
            >
                <IoClose className="fill-yellow-800 size-5" />
            </button>
        </div>
    );
}
