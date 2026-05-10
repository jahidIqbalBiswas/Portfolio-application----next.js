import { LucideIcon } from "lucide-react";
type Props = {
  name: string;
  icon: LucideIcon;
};
const SkillCard = ({ name, icon: Icon }: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 border border-transparent hover:border-green-500/30">
      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:from-green-300 group-hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/20">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <span className="text-sm font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
