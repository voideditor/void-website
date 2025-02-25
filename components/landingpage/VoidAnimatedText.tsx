'use client'

import React, { useState, useEffect, useRef } from 'react';

const VoidAnimatedText = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [seed, setSeed] = useState(0);
    const animationRef = useRef<SVGFETurbulenceElement | null>(null);

    useEffect(() => {
        setSeed(s => s + 1);

        if (!animationRef.current)
            return

        if (isHovering)
            // @ts-expect-error
            animationRef.current?.beginElement();

    }, [isHovering]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width="0" height="0">
                <filter id="turbulence" x="-50%" y="-50%" width="200%" height="200%">
                    <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" seed={seed}>
                        <animate
                            ref={animationRef}
                            attributeName="baseFrequency"
                            dur="4s"
                            values="0;0;0.1;0"
                            keyTimes="0;0.04;0.9;1"
                            repeatCount="1"
                            fill="freeze"
                        />
                    </feTurbulence>
                    <feDisplacementMap seed={seed} in="SourceGraphic" in2="turbulence" scale={isHovering ? "30" : "0"} xChannelSelector="R" yChannelSelector="G" />
                    <feOffset dx={isHovering ? "-15" : "0"} dy={isHovering ? "-15" : "0"} />
                </filter>
            </svg>
            <div
                className="flex items-center justify-center hover:cursor-pointer transition-all duration-200 ease-in-out"
                style={{ filter: 'url(#turbulence)' }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <h2 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-black to-gray-500 text-3xl whitespace-nowrap">
                    void
                </h2>
            </div>
        </div>
    );
};

export default VoidAnimatedText;