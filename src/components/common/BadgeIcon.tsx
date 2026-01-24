import type { LucideIcon } from "lucide-react";
import { StarBadge } from "./StarBadge";

interface BadgeIconProps {
  icon: LucideIcon;
  color?: string;
  className?: string;
  iconClassName?: string;
}

export const BadgeIcon = ({ 
  icon: Icon, 
  color, 
  className = "w-20 h-20", 
  iconClassName = "w-9 h-9 text-foreground" 
}: BadgeIconProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <StarBadge 
        color={color} 
        className="w-full h-full absolute inset-0" 
      />
      <Icon 
        className={`relative z-10 ${iconClassName}`} 
        strokeWidth={2}
      />
    </div>
  );
};
