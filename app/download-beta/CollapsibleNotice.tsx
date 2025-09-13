'use client';

import React from 'react';
import { MdPauseCircle } from 'react-icons/md';

export default function CollapsibleNotice() {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div
            className=' px-4 max-w-[500px] mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg cursor-pointer transition-colors'
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex items-start gap-2">
                <MdPauseCircle className="fill-yellow-800 flex-shrink-0" />
                <p className={`text-sm text-yellow-800 ${!isExpanded ? 'line-clamp-1' : ' text-wrap'}`}>
                    {`Work is currently paused on the Void IDE while we experiment with a few novel features. You can still download, use, and extend Void with custom models, and we'll push updates when available.  `}
                </p>
            </div>
        </div>
    );
}
