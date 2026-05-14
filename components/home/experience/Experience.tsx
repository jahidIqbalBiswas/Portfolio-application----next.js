import SectionHeading from "@/components/helpers/SectionHeading";
import { experiences } from "@/data/data";
import { Briefcase, GraduationCapIcon } from "lucide-react";

const Experience = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        firstHeading="Experience &"
        lastHeading="Education"
        subHeading="My professional journey and academic background"
      />

      <div className="relative px-6 max-w-4xl mx-auto mt-12">
        {/* টাইমলাইন লাইন - এখন সবুজ গ্র্যাডিয়েন্টে */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-green-400 via-emerald-500 to-green-900 md:-translate-x-px"></div>

        {experiences.map((item, index) => {
          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* timeline node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white dark:bg-gray-950 border-2 border-green-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-green-500" />
                ) : (
                  <GraduationCapIcon className="w-4 h-4 text-green-500" />
                )}
              </div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-green-500/10 hover:border-green-500/30">
                  {/* Period and Header Section */}
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-2">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 font-medium border border-green-500/20">
                      {item.period}
                    </span>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-semibold mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies Map Section */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-semibold bg-green-500/5 text-green-700 dark:text-green-400 rounded-md border border-green-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
