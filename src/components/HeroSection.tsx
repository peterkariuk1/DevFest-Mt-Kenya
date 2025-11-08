import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/devfestherosection.jpeg";
import abstractShape from "@/assets/abstract-shape.png";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Abstract Shape */}
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-10 animate-float">
        <img
          src={abstractShape}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              DevFest <span className="liquid-shimmer">Mt. Kenya</span> 2025
            </h1>

            <h4 className=" text-muted-foreground max-w-xl mt-0 mb-0">
              Unleashing Digital Transformation
            </h4>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => {
                  const el = document.getElementById("program");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                View Program
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Floating Event Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass p-4 rounded-xl text-center animate-float">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Attendees</div>
              </div>
              <div
                className="glass p-4 rounded-xl text-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl font-bold text-accent-green">20+</div>
                <div className="text-sm text-muted-foreground">Speakers</div>
              </div>
              <div
                className="glass p-4 rounded-xl text-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-2xl font-bold text-accent-red">15+</div>
                <div className="text-sm text-muted-foreground">Sessions</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src={heroImage}
                alt="DevFest developers collaborating"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /> */}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-glow animate-pulse-glow">
              <div className="text-sm text-muted-foreground">Powered by</div>
              <div className="text-xl font-bold gradient-text">
                GDG Mt. Kenya
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
