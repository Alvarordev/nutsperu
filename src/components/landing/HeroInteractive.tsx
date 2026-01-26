import { useState, useEffect } from "react";

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

// Shared hook for mouse position relative to window center
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

  const floatingImages = [
    {
      id: 1,
      src: images.almendra,
      size: 120,
      initialX: -7,
      initialY: 3,
      depth: 0.03,
    },
    {
      id: 2,
      src: images.mani,
      size: 100,
      initialX: -1,
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
    <>
      {floatingImages.map((image) => (
        <div
          key={image.id}
          className="absolute pointer-events-none hidden md:block z-100"
          style={{
            left: `${image.initialX}%`,
            top: `${image.initialY}%`,
            width: `${image.size}px`,
            transform: `translate(${mousePosition.x * image.depth * -1}px, ${
              mousePosition.y * image.depth * -1
            }px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-auto drop-shadow-[6px_6px_16px_rgba(0,0,0,0.35)]"
            draggable="false"
          />
        </div>
      ))}
    </>
  );
}

export function ParallaxTable({ src }: ParallaxTableProps) {
  const mousePosition = useMouseParallax();

  return (
    <img
      src={src}
      alt="table image"
      className="h-64 pt-4 md:h-110 top-26 block md:absolute right-10 2xl:right-0 drop-shadow-[8px_8px_12px_rgba(0,0,0,0.3)]"
      style={{
        transform: `rotate(330deg) translate(${
          mousePosition.x * 0.01 * -1
        }px, ${mousePosition.y * 0.01 * -1}px)`,
        transition: "transform 0.2s ease-out",
      }}
    />
  );
}
