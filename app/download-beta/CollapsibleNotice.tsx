'use client';

import React from 'react';
import { MdPauseCircle } from 'react-icons/md';

export default function CollapsibleNotice() {
    // const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div
            className=' px-4 max-w-[500px] mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg cursor-default transition-colors'
            cursor-pointer
        // onClick={() => setIsExpanded(!isExpanded)}

        >
            <div className="flex items-start gap-2">
                <MdPauseCircle className="fill-yellow-800 flex-shrink-0" />
                <p className={`text-sm text-yellow-800 
                    ${!true/*isExpanded*/ ? 'line-clamp-1' : ' text-wrap'}
                    `}>
                    {`While Void is paused, some features may be outdated or broken.`}
                </p>
            </div>
        </div>
    );
}
