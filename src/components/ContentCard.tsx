import React from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
  delay?: number;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  icon,
  iconBg = "bg-primary-red/10",
  delay = 0,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl border border-light-gray bg-white hover:shadow-lg transition-all duration-300 animate-enter",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "absolute -z-10 inset-0 rounded-xl opacity-0 bg-gradient-to-br from-primary-red/5 to-primary-red/0 group-hover:opacity-100 transition-opacity",
        )}
      ></div>

      <div
        className={cn(
          "w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-primary-red",
          iconBg,
        )}
      >
        <Icon name={icon} className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold text-dark-gray mb-3 group-hover:text-primary-red transition-colors">
        {title}
      </h3>

      <p className="text-neutral-gray">{description}</p>

      <div className="mt-4 flex items-center text-primary-red font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <span>Подробнее</span>
        <Icon name="ArrowRight" className="bg ml-1 h-4 w-4" />
      </div>
    </div>
  );
};

export default ContentCard;
