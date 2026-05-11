import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

// আপনার ইমেজ অনুযায়ী Props টাইপ ডিফিনিশন
type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string; // অপশনাল
  githubUrl?: string; // অপশনাল
};

const ProjectCard = ({
  description,
  image,
  techStack,
  title,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-green-500/10 hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
      {/* ইমেজ সেকশন */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* হোভার ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-green-500 transition-colors"
            >
              <BsGithub className="w-5 h-5 text-white" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-green-500 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        {/* টেক স্ট্যাক ট্যাগস */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-medium bg-green-500/10 text-green-700 dark:text-green-400 rounded-md border border-green-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Mobile-Friendly Buttons Section */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-3 mt-auto">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full border-green-500/20 hover:bg-green-500/10 hover:text-green-600"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <BsGithub className="w-4 h-4" />
              Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button
            size="sm"
            asChild
            className="w-full bg-green-600 hover:bg-green-700! text-white shadow-lg shadow-green-500/20"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
