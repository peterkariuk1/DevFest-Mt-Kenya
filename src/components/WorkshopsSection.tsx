import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, User } from "lucide-react";
import { Button } from "./ui/button";

const workshops = [
  {
    title: "Building Scalable Android Apps with Jetpack Compose",
    speaker: "James Omondi",
    time: "2:00 PM - 3:30 PM",
    venue: "RC1",
  },
  {
    title: "AI-Powered Web Applications with TensorFlow.js",
    speaker: "Sarah Kimani",
    time: "2:00 PM - 3:30 PM",
    venue: "RC2",
  },
  {
    title: "Cloud-Native Development on Google Cloud",
    speaker: "Amina Hassan",
    time: "3:45 PM - 5:15 PM",
    venue: "RC3",
  },
];

export function WorkshopsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="workshops" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Workshops & Hands-On Labs</h2>
          <p className="text-xl text-muted-foreground">
            Deep-dive sessions facilitated by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="glass rounded-3xl p-6 h-full flex flex-col hover:shadow-glow hover:-translate-y-2 transition-smooth">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                    {workshop.title}
                  </h3>
                  
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{workshop.speaker}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{workshop.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent-green">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">{workshop.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            View More Workshops
            <span className="inline-block group-hover:translate-x-1 transition-smooth">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
