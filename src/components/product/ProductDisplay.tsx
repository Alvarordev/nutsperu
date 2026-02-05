import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductPresentation {
  label: string;
  id: string;
}

interface Product {
  name: string;
  slug: string;
  description: string;
  images: { id: string; src: string }[];
  presentations: ProductPresentation[];
}

interface ProductDisplayProps {
  product: Product;
}

const buttonBaseStyles =
  "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const buttonVariants = {
  primary:
    "bg-secondary text-foreground border-2 border-transparent hover:bg-white hover:border-dark hover:text-foreground focus:ring-primary shadow-[-4px_4px_0px_0px_var(--color-dark)]",
  outline:
    "border-2 border-foreground text-foreground hover:bg-primary hover:text-background focus:ring-primary",
  outlineActive:
    "bg-primary text-background border-2 border-primary focus:ring-primary",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm rounded-full font-medium",
  lg: "px-8 py-4 text-lg rounded-full font-bold",
};

export function ProductDisplay({ product }: ProductDisplayProps) {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const getWhatsAppLink = () => {
    const phoneNumber = "51908851530";
    const currentPresentation = product.presentations.find(
      (p) => p.id === selectedImageId
    );
    const presentationText = currentPresentation 
      ? ` en presentación ${currentPresentation.label.toLowerCase()}`
      : "";
    
    const message = `Hola, buen día. Quisiera solicitar una cotización para ${product.name}${presentationText}. Me gustaría conocer precios, cantidades mínimas de pedido y tiempos de entrega. Quedo atento a su respuesta. Gracias.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const imageParam = params.get("image");

    if (imageParam && product.images.some((img) => img.id === imageParam)) {
      setSelectedImageId(imageParam);
    } else if (product.images.length > 0) {
      setSelectedImageId(product.images[0].id);
    }
  }, [product.images]);

  const handleImageSelect = (imageId: string) => {
    setSelectedImageId(imageId);
    const url = new URL(window.location.href);
    url.searchParams.set("image", imageId);
    window.history.replaceState({}, "", url);
  };

  const handlePresentationSelect = (presentationId: string) => {
    const matchingImage = product.images.find(
      (img) => img.id === presentationId,
    );
    if (matchingImage) {
      handleImageSelect(matchingImage.id);
    }
  };

  const currentImage =
    product.images.find((img) => img.id === selectedImageId) ||
    product.images[0];

  const handlePrevImage = () => {
    const currentIndex = product.images.findIndex(
      (img) => img.id === selectedImageId,
    );
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : product.images.length - 1;
    handleImageSelect(product.images[prevIndex].id);
  };

  const handleNextImage = () => {
    const currentIndex = product.images.findIndex(
      (img) => img.id === selectedImageId,
    );
    const nextIndex =
      currentIndex < product.images.length - 1 ? currentIndex + 1 : 0;
    handleImageSelect(product.images[nextIndex].id);
  };

  return (
    <section className="p-4 md:p-20">
      <div className="w-full max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-2xl bg-white shadow-lg overflow-hidden">
            <img
              key={currentImage.id}
              src={currentImage.src}
              alt={product.name}
              className={`w-full h-full object-contain transition-opacity duration-300 ${currentImage.id === product.images[0].id ? "p-8" : ""}`}
            />

            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-foreground rounded-full p-2 transition-all shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6 text-foreground" strokeWidth={2} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-foreground rounded-full p-2 transition-all shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight
                className="size-6 text-foreground"
                strokeWidth={2}
              />
            </button>
          </div>

          <div className="relative w-full">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2">
                {product.images.map((image, index) => {
                  const isSelected = selectedImageId === image.id;
                  const isFirst = index === 0;
                  return (
                    <button
                      key={image.id}
                      onClick={() => handleImageSelect(image.id)}
                      className={`shrink-0 aspect-square w-20 md:w-24 rounded-lg bg-white shadow-md overflow-hidden border-2 transition-all ${
                        isSelected
                          ? "border-primary"
                          : "border-transparent hover:border-foreground"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={`${product.name} - ${image.id}`}
                        className={`w-full h-full object-contain ${isFirst ? "p-2" : ""}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col flex-1 items-start h-full w-full">
          <h1 className="text-4xl md:text-5xl font-black text-foreground font-title mb-6">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl text-foreground font-normal mb-10 text-balance">
            {product.description}
          </p>

          <p className="text-lg font-title font-semibold">
            Presentaciones Disponibles:
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {product.presentations.map((presentation) => {
              const hasMatchingImage = product.images.some(
                (img) => img.id === presentation.id,
              );
              const isSelected =
                hasMatchingImage && selectedImageId === presentation.id;

              return (
                <button
                  key={presentation.id}
                  onClick={() => handlePresentationSelect(presentation.id)}
                  className={`${buttonBaseStyles} ${isSelected ? buttonVariants.outlineActive : buttonVariants.outline} ${buttonSizes.sm} uppercase!`}
                >
                  {presentation.label}
                </button>
              );
            })}
          </div>

          <div className="flex w-full mt-10">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBaseStyles} ${buttonVariants.primary} ${buttonSizes.lg} py-2!  w-full md:w-auto`}
            >
              Cotiza tu pedido
              <ArrowRight className="size-5 ml-2" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
