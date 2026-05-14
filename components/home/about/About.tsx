import SectionHeading from "@/components/helpers/SectionHeading";
import { highlights, stats } from "@/data/data";
import myPic from "@/public/images/jib-green-best.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        firstHeading="About"
        lastHeading="Me"
        subHeading="Get to know the developer behind the code."
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          {/* Background Glow Effect */}
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div> */}

          <div className="aspect-auto rounded-2xl overflow-hidden p-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-green-500/20">
            <Image
              src={myPic}
              alt="profile"
              width={700}
              height={700}
              preload={true}
              placeholder="blur"
              className="w-full h-full object-cover rounded-xl hover:grayscale-50 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">
            A passionate developer who loves to create
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m a full-stack developer with over{" "}
            <span className="text-green-600 dark:text-green-400">
              6 years of experience
            </span>{" "}
            building web applications. My journey started with curiosity about
            how websites work, and it has evolved into a passion for creating
            seamless, user-focused digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I&apos;m dedicated to sharing knowledge. I&apos;ve
            taught many students through courses. I believe in continuous
            learning and staying updated with the latest technologies.
          </p>
          {/* Highlights with Green Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center transition-colors group-hover:bg-green-500/20">
                    <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
