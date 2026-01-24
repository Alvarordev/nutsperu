import { ArrowUpRight } from "lucide-react";
import { StarBadge } from "../common/StarBadge";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  isSelected: boolean;
  onClick: () => void;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  isSelected,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col justify-between
        rounded-2xl cursor-pointer relative
        transition-all duration-300 ease-out
        ${
          isSelected
            ? "bg-accent shadow-xl flex-[1.1_1_0%] py-10 px-8 min-h-115 md:scale-105 z-10"
            : "bg-white shadow-md hover:shadow-lg flex-[1_1_0%] py-6 px-6 min-h-100 scale-100 z-0"
        }
      `}
    >
      <div className="flex flex-col items-start w-full gap-6">
        <div className="relative flex items-center justify-center h-20 w-20">
          <StarBadge
            className="absolute inset-0 w-full h-full text-white transition-colors duration-300"
            color={isSelected ? "white" : "var(--color-accent)"}
          />
          <div
            className={`relative z-10 transition-colors duration-300 text-foreground`}
          >
            <Icon className="h-10 w-10" strokeWidth={2} />
          </div>
        </div>

        <div className="flex flex-col w-full text-left">
          <h3
            className={`
            font-title font-black text-xl md:text-2xl mb-2
            transition-colors duration-300 text-foreground
          `}
          >
            {title}
          </h3>

          <div
            className={`
             transition-all duration-300
             ${isSelected ? "opacity-100 max-h-96" : "opacity-100 max-h-96"} 
          `}
          >
            <p className="text-base font-normal text-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`
        flex justify-end mt-4
      `}
      >
        <ArrowUpRight
          className={`
            w-6 h-6 transition-colors duration-300 text-foreground
          `}
        />
      </div>
    </div>
  );
}
