import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`text-center p-5 sm:p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-blue-600/10 rounded-full group-hover:bg-blue-600/20 transition-colors">
          <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
        </div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">{value}</div>
      <div className="text-xs sm:text-sm text-blue-700">{label}</div>
    </div>
  );
};

export default StatCard;
