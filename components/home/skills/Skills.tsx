import SectionHeading from "@/components/helpers/SectionHeading";
import { skillCategories } from "@/data/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-950">
      <SectionHeading
        firstHeading="Technical"
        lastHeading="Skills"
        subHeading="Technologies I've been working with recently"
      />

      <div className="space-y-12 w-[80%] mx-auto">
        {skillCategories.map((category) => {
          return (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => {
                  return (
                    <div key={skill.name}>
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
