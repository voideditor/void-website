import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generatePseudoRandomPositions = (numToGenerate: number, seed: number) => {
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