import { generatePseudoRandomPositions } from "@/lib/utils";
import { useMemo } from "react";

import '../../app/twinkle.css'

export const SparkleOverlay = ({ number, seed }: { number: number, seed: number }) => {
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