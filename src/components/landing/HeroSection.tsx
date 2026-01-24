import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  tableImageUrl: string;
  macroImages: {
    almendra: string;
    mani: string;
    nuezBrasil: string;
    nuezNogal: string;
    pistacho: string;
  };
}

interface FloatingImage {
  id: number;
  src: string;
  size: number;
  initialX: number;
  initialY: number;
  depth: number; // Parallax depth factor
}

export function HeroSection({ tableImageUrl, macroImages }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const floatingImages: FloatingImage[] = [
    // Top Left - Almendra
    {
      id: 1,
      src: macroImages.almendra,
      size: 120,
      initialX: -7,
      initialY: 3,
      depth: 0.03,
    },
    // Bottom Left - Nuez Brasil
    {
      id: 2,
      src: macroImages.mani,
      size: 100,
      initialX: -1,
      initialY: 75,
      depth: 0.04,
    },
    // Top Rightish - Pistacho
    {
      id: 3,
      src: macroImages.pistacho,
      size: 100,
      initialX: 55,
      initialY: 10,
      depth: 0.02,
    },
    // Mid Left - Mani
    {
      id: 4,
      src: macroImages.nuezBrasil,
      size: 140,
      initialX: 45,
      initialY: 65,
      depth: 0.025,
    },
    // Right Edge - Nuez Nogal
    {
      id: 5,
      src: macroImages.nuezNogal,
      size: 115,
      initialX: 93,
      initialY: 12,
      depth: 0.035,
    },
    // Bottom Right - Almendra
    {
      id: 6,
      src: macroImages.almendra,
      size: 110,
      initialX: 96,
      initialY: 75,
      depth: 0.03,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col w-full overflow-hidden text-background bg-primary"
    >
      {/* Floating Images */}
      {floatingImages.map((image) => (
        <div
          key={image.id}
          className="absolute pointer-events-none hidden md:block z-10"
          style={{
            left: `${image.initialX}%`,
            top: `${image.initialY}%`,
            width: `${image.size}px`,
            transform: `translate(${mousePosition.x * image.depth * -1}px, ${mousePosition.y * image.depth * -1}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-auto drop-shadow-[6px_6px_16px_rgba(0,0,0,0.35)] "
            draggable="false"
          />
        </div>
      ))}

      <div className="relative flex flex-col md:flex-row max-w-7xl mx-auto pb-12 w-full px-6 md:px-0 z-10">
        <div className="max-w-4xl text-left flex flex-col gap-4 pt-18 md:pt-38">
          <h1 className="text-[44px] md:text-[5rem] font-black leading-[1.1] font-title">
            Recien Tostados,
            <br />
            Cuidadosamente
            <br />
            Seleccionados.
          </h1>
          <p className="text-base md:text-xl font-medium">
            Frutos secos, semillas y snacks al por mayor <br /> en todo Lima.
          </p>
          <div>
            <button
              className="hidden md:inline-flex items-center justify-center transition-all duration-200 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 
                         disabled:pointer-events-none bg-secondary text-foreground border-2 border-transparent 
                         hover:bg-white hover:border-dark hover:text-foreground group-hover:bg-white 
                         group-hover:border-dark group-hover:text-primary focus:ring-primary 
                         shadow-[-4px_4px_0px_0px_var(--color-dark)] px-8 py-2 text-lg rounded-full font-bold"
            >
              Cotiza tu pedido
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={3} />
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full">
          <img
            src={tableImageUrl}
            alt=""
            className="h-68 pt-4 md:h-110 rotate-330 top-26 block md:absolute right-0 drop-shadow-[8px_8px_12px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      <div className="w-full bg-background">
        <img
          src="/src/assets/texture.png"
          alt="texture"
          className="-translate-y-0.5"
        />
      </div>
    </section>
  );
}
