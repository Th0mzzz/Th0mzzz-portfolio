import Circle from "@/components/Circle";

type Position = 'top-right' | 'top-center' | 'top-left' | 'mid-right' | 'mid-center' | 'mid-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';

interface DecorativeCirclesProps {
    position?: Position;
}

export default function DecorativeCircles({ position = 'top-right' }: DecorativeCirclesProps) {
    const positionStyles: Record<Position, { containerClass: string; circles: Array<{ size: number; color: string; top?: string; right?: string; left?: string; bottom?: string; opacity: number; delay: number }> }> = {
        'top-right': {
            containerClass: 'top-0 right-0',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-400px', right: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-300px', right: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-225px', right: '-225px', opacity:0.2, delay: 2 },
            ],
        },
        'top-center': {
            containerClass: 'top-0 left-1/2',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-400px', left: '-600px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-300px', left: '-500px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-225px', left: '-425px', opacity:0.2, delay: 2 },
            ],
        },
        'top-left': {
            containerClass: 'top-0 left-0',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-400px', left: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-300px', left: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-225px', left: '-225px', opacity:0.2, delay: 2 },
            ],
        },
        'mid-right': {
            containerClass: 'top-1/2 right-0',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-600px', right: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-500px', right: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-425px', right: '-225px', opacity:0.2, delay: 2 },
            ],
        },
        'mid-center': {
            containerClass: 'top-1/2 left-1/2',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-600px', left: '-600px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-500px', left: '-500px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-425px', left: '-425px', opacity:0.2, delay: 2 },
            ],
        },
        'mid-left': {
            containerClass: 'top-1/2 left-0',
            circles: [
                { size: 1200, color: 'var(--primary)', top: '-600px', left: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', top: '-500px', left: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', top: '-425px', left: '-225px', opacity:0.2, delay: 2 },
            ],
        },
        'bottom-right': {
            containerClass: 'bottom-0 right-0',
            circles: [
                { size: 1200, color: 'var(--primary)', bottom: '-400px', right: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', bottom: '-300px', right: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', bottom: '-225px', right: '-225px', opacity:0.2, delay: 2 },
            ],
        },
        'bottom-center': {
            containerClass: 'bottom-0 left-1/2',
            circles: [
                { size: 1200, color: 'var(--primary)', bottom: '-400px', left: '-600px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', bottom: '-300px', left: '-500px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', bottom: '-225px', left: '-425px', opacity:0.2, delay: 2 },
            ],
        },
        'bottom-left': {
            containerClass: 'bottom-0 left-0',
            circles: [
                { size: 1200, color: 'var(--primary)', bottom: '-400px', left: '-400px', opacity:0.2, delay: 0 },
                { size: 1000, color: 'var(--primary)', bottom: '-300px', left: '-300px', opacity:0.2, delay: 1 },
                { size: 850, color: 'var(--primary)', bottom: '-225px', left: '-225px', opacity:0.2, delay: 2 },
            ],
        },
    };

    const { containerClass, circles } = positionStyles[position];

    return (
        <div className={`absolute ${containerClass} w-full h-screen pointer-events-none -z-10 `} style={{maxWidth:"100vw"}}>
            {circles.map((circle, index) => (
                <Circle key={index} {...circle} />
            ))}
        </div>
    );
}