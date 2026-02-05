import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MacroImages {
    almendra: string;
    mani: string;
    nuezBrasil: string;
    nuezNogal: string;
    pistacho: string;
}

interface FloatingNutsProps {
    images: MacroImages;
}

interface ParallaxTableProps {
    src: string;
}

function useMouseParallax() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return mousePosition;
}

export function FloatingNuts({ images }: FloatingNutsProps) {
    const mousePosition = useMouseParallax();
    const nutsContainerRef = useRef<HTMLDivElement>(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (!nutsContainerRef.current) return;

        const elements =
            nutsContainerRef.current.querySelectorAll(".floating-nut");

        gsap.fromTo(
            elements,
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5,
                onComplete: () => setIsAnimated(true),
            },
        );
    }, []);

    const floatingImages = [
        {
            id: 1,
            src: images.almendra,
            size: 120,
            initialX: -2,
            initialY: 3,
            depth: 0.03,
        },
        {
            id: 2,
            src: images.mani,
            size: 100,
            initialX: 1,
            initialY: 75,
            depth: 0.04,
        },
        {
            id: 3,
            src: images.pistacho,
            size: 100,
            initialX: 55,
            initialY: 10,
            depth: 0.02,
        },
        {
            id: 4,
            src: images.nuezBrasil,
            size: 140,
            initialX: 45,
            initialY: 65,
            depth: 0.025,
        },
        {
            id: 5,
            src: images.nuezNogal,
            size: 115,
            initialX: 93,
            initialY: 12,
            depth: 0.035,
        },
        {
            id: 6,
            src: images.almendra,
            size: 110,
            initialX: 96,
            initialY: 75,
            depth: 0.03,
        },
    ];

    return (
        <div ref={nutsContainerRef}>
            {floatingImages.map((image, index) => (
                <FloatingNut
                    key={image.id}
                    image={image}
                    mousePosition={mousePosition}
                    isAnimated={isAnimated}
                    index={index}
                />
            ))}
        </div>
    );
}

interface FloatingNutProps {
    image: {
        id: number;
        src: string;
        size: number;
        initialX: number;
        initialY: number;
        depth: number;
    };
    mousePosition: { x: number; y: number };
    isAnimated: boolean;
    index: number;
}

function FloatingNut({
    image,
    mousePosition,
    isAnimated,
    index,
}: FloatingNutProps) {
    const nutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!nutRef.current || !isAnimated) return;

        const parallaxX = mousePosition.x * image.depth * -1;
        const parallaxY = mousePosition.y * image.depth * -1;

        gsap.to(nutRef.current, {
            x: parallaxX,
            y: parallaxY,
            duration: 0.2,
            ease: "power1.out",
        });
    }, [mousePosition, isAnimated, image.depth]);

    return (
        <div
            ref={nutRef}
            className="floating-nut absolute pointer-events-none hidden md:block z-100"
            style={{
                left: `${image.initialX}%`,
                top: `${image.initialY}%`,
                width: `${image.size}px`,
                opacity: 0,
            }}
        >
            <img
                src={image.src}
                alt=""
                className="w-full h-auto drop-shadow-[6px_6px_16px_rgba(0,0,0,0.35)]"
                draggable="false"
            />
        </div>
    );
}

export function ParallaxTable({ src }: ParallaxTableProps) {
    const mousePosition = useMouseParallax();
    const tableRef = useRef<HTMLImageElement>(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (!tableRef.current) return;

        gsap.fromTo(
            tableRef.current,
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
                delay: 0.5,
                onComplete: () => setIsAnimated(true),
            },
        );
    }, []);

    useEffect(() => {
        if (!tableRef.current || !isAnimated) return;

        const parallaxX = mousePosition.x * 0.01 * -1;
        const parallaxY = mousePosition.y * 0.01 * -1;

        gsap.to(tableRef.current, {
            x: parallaxX,
            y: parallaxY,
            duration: 0.2,
            ease: "power1.out",
        });
    }, [mousePosition, isAnimated]);

    return (
        <img
            ref={tableRef}
            src={src}
            alt="table image"
            className="h-64 pt-4 md:h-110 top-26 block md:absolute right-10 2xl:right-0 drop-shadow-[8px_8px_12px_rgba(0,0,0,0.3)]"
            style={{
                rotate: "330deg",
                opacity: 0,
            }}
        />
    );
}
