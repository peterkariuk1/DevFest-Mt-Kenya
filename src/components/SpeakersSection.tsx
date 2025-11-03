import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const speakers = [
  {
    name: "Sarah Kimani",
    role: "AI Research Lead",
    company: "Google",
    topic: "Future of AI",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "James Omondi",
    role: "Senior Android Engineer",
    company: "Meta",
    topic: "Modern Android Dev",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Amina Hassan",
    role: "Cloud Architect",
    company: "AWS",
    topic: "Scalable Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "David Mwangi",
    role: "Full Stack Developer",
    company: "Microsoft",
    topic: "Web Performance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
];

export function SpeakersSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 6);

  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-xl text-muted-foreground">
            Learn from industry experts and tech leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {displayedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass rounded-3xl p-6 text-center hover:shadow-glow transition-smooth">
                {/* Avatar */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-smooth"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-smooth relative">
                  {speaker.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{speaker.role}</p>
                <p className="text-xs font-semibold text-accent-green mb-3">{speaker.company}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium">
                  {speaker.topic}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a href="#" className="p-2 rounded-full hover:bg-primary/10 transition-smooth">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-primary/10 transition-smooth">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-primary/10 transition-smooth">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && speakers.length > 6 && (
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => setShowAll(true)}
              className="group"
            >
              View More Speakers
              <span className="inline-block group-hover:translate-x-1 transition-smooth">→</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
