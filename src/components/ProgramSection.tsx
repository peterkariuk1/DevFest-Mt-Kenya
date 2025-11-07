import { useEffect, useRef, useState } from "react";
import { Clock, Code, Cloud, Brain, Users, Camera } from "lucide-react";

const programItems = [
  {
    time: "9:00 AM",
    title: "Welcoming and House Rules",
    icon: Users,
    color: "text-primary",
  },
  {
    time: "9:15 AM",
    title: "Opening Keynote & Partner Spotlight",
    icon: Brain,
    color: "text-accent-primary",
  },
  {
    time: "9:30 AM",
    title: "Mt. Kenya Hub Keynote",
    icon: Code,
    color: "text-accent-red",
  },
  {
    time: "10:00 AM",
    title: "Partner Introduction",
    icon: Users,
    color: "text-accent-yellow",
  },
  {
    time: "10:30 AM",
    title: "Google Resources Prerequisites",
    icon: Code,
    color: "text-green",
  },
  {
    time: "11:00 AM",
    title: "Hands-on Workshop 1",
    icon: Code,
    color: "text-accent-primary",
  },
  {
    time: "11:45 AM",
    title: "PromptBI Keynote",
    icon: Cloud,
    color: "text-accent-red",
  },
  {
    time: "12:15 PM",
    title: "Hands-on Workshop 2",
    icon: Code,
    color: "text-accent-yellow",
  },
  {
    time: "1:00 PM",
    title: "Lunch & Networking",
    icon: Users,
    color: "text-accent-yellow",
  },
  {
    time: "2:00 PM",
    title: "Panel discussion",
    icon: Users,
    color: "text-accent-green",
  },
  {
    time: "3:00 PM",
    title: "Student Showcase & Closing",
    icon: Users,
    color: "text-accent-green",
  },
];

export function ProgramSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="program" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Program</h2>
          <p className="text-xl text-muted-foreground">
            Here's what to expect at DevFest 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-green to-accent-yellow" />

          {/* Program Items */}
          <div className="space-y-8">
            {programItems.map((item, index) => {
              const Icon = item.icon;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-glow z-10" />

                    {/* Content Card */}
                    <div className="ml-20 md:ml-auto md:w-5/12 glass p-6 rounded-2xl shadow-premium hover:shadow-glow transition-smooth group">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-muted ${item.color} group-hover:scale-110 transition-smooth`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              {item.time}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
