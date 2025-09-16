import React, { useRef } from "react";

type ParallaxHoverProps = {
  children: React.ReactNode;
  maxRotate?: number;
  translate?: number;
  className?: string;
};

export default function ParallaxHover({
  children,
  maxRotate = 6,
  translate = 8,
  className = "",
}: ParallaxHoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = -py * maxRotate;
    const ry = px * maxRotate;
    const tx = px * translate;
    const ty = py * translate;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0)`;
  };

  const onLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-200 will-change-transform ${className}`}>
      {children}
    </div>
  );
}
