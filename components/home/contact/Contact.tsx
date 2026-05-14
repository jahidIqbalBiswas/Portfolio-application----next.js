import SectionHeading from "@/components/helpers/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data/data";
import { Send } from "lucide-react";
const Contact = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        firstHeading="Get In"
        lastHeading="Touch"
        subHeading="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="w-[80%] mx-auto mt-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Let&apos;s talk
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am always open to discussing new projects, creative ideas or
                opportunities to be part of your visions. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            {/* Contact Details (Email, Phone, Location) */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    {/* আইকন কন্টেইনার - এখন সবুজ থিমে */}
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>

                    {/* টেক্সট কন্টেন্ট */}
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            {/* social icons */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-transparent hover:border-green-500/20"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* contact form container */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-green-500/10 dark:border-green-500/5 shadow-xl transition-colors duration-300">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    className="bg-gray-100 dark:bg-gray-800 border dark:border-none text-foreground h-12 px-4 focus-visible:ring-2 focus-visible:ring-green-500 transition-all placeholder:text-muted-foreground"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-100 dark:bg-gray-800 border dark:border-none text-foreground h-12 px-4 focus-visible:ring-2 focus-visible:ring-green-500 transition-all placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="bg-gray-100 dark:bg-gray-800 border dark:border-none text-foreground h-12 px-4 focus-visible:ring-2 focus-visible:ring-green-500 transition-all placeholder:text-muted-foreground"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project...."
                  className="bg-gray-100 dark:bg-gray-800 border dark:border-none text-foreground min-h-40 p-4 focus-visible:ring-2 focus-visible:ring-green-500 transition-all placeholder:text-muted-foreground"
                />
              </div>

              {/* Green Theme Submit Button */}
              <div className="pt-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
