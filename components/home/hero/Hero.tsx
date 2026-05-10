import { me } from "@/data/data";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(180,245,200,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50%_50%,rgba(10,50,45,1)_0%,rgba(5,10,10,1)_100%)]">
      {/* Content  */}
      <div className="relative z-10 text-center p-5">
        {/* Subtitle */}
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        {/* title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m{" "}
          <span className="text-green-600 dark:text-green-400">{me.name}</span>
        </h1>
        {/* text animation */}
        <AnimatedText />
        {/* description */}
        <p className="text-lg font-light text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications and teaching others.
        </p>
        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={"lg"} asChild className="w-fit p-5 mx-auto sm:mx-0">
            <a href="#_">
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size={"lg"} asChild className="w-fit p-5 mx-auto sm:mx-0">
            <a href="#_">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
