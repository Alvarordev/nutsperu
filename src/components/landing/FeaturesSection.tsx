import { useState } from "react";
import { Award, Nut, Handshake } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    id: 1,
    title: "Más de 15 años de experiencia",
    description:
      "Por más de 15 años, hemos sido líderes en la distribución de frutos secos y snacks saludables en Lima. Nuestra experiencia nos permite entender las necesidades de nuestros clientes y ofrecer soluciones personalizadas.",
    icon: (props: any) => <Award {...props} />,
  },
  {
    id: 2,
    title: "Calidad garantizada",
    description:
      "Todos nuestros productos pasan por rigurosos controles de calidad. Trabajamos con los mejores proveedores para garantizar frescura y sabor excepcional en cada entrega.",
    icon: (props: any) => <Nut {...props} />,
  },
  {
    id: 3,
    title: "Servicio personalizado",
    description:
      "Entendemos que cada negocio es único. Por eso ofrecemos asesoría personalizada, pedidos flexibles y entregas puntuales adaptadas a tus necesidades específicas.",
    icon: (props: any) => <Handshake {...props} />,
  },
];

export function FeaturesSection() {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const handleCardClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-center mt-14 md:mt-22 max-w-300 mx-auto">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          isSelected={selectedId === feature.id}
          onClick={() => handleCardClick(feature.id)}
        />
      ))}
    </div>
  );
}
