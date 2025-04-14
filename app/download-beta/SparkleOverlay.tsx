'use client';

import { useMemo } from 'react';

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

export default SparkleOverlay;