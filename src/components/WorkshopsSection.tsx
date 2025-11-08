import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, User } from "lucide-react";

const workshops = [
  // FIRST 8
  {
    title:
      "Building Intelligent Java Apps: Integrating Gemini and Spring Al for Production-Ready Tools",
    speaker: "Ian Dancan",
    venue: "RC1",
  },

  {
    title: "From Manual Mayhem to Automated Zen: Our CI/CD Journey in GCP",
    speaker: "Samuel Macharia",
    venue: "RC4",
  },
  {
    title:
      "Building Scalable Smart Homes on the Cloud: An ESP32 + Firebase Journey",
    speaker: "Mwangi Ephraim",
    venue: "RC5",
  },
  {
    title: "Blockchain Meets Al in Agricultural Predictions",
    speaker: "Alex Mwangi",
    venue: "RC6",
  },
  {
    title:
      "Orchestrating Cloud-Native Applications: A Deep Dive into Google Kubernetes Engine",
    speaker: "Alex Nyambura",
    venue: "RC7",
  },
  {
    title: "Real-Time Edge Al with YOLO and Transfer Learning",
    speaker: "Levis Kamau",
    venue: "RC8",
  },

  // NEXT 8
  {
    title:
      "Serverless Africa: Building Smarter Apps with Google Cloud Functions",
    speaker: "Gilbert Chris",
    venue: "RC1",
  },

  {
    title: "Unpacking Angular Signals: What the Docs Don't Tell You",
    speaker: "Alex Muturi",
    venue: "RC2",
  },
  {
    title:
      "Al Ethics in Africa: Building for Communities, Not Just Corporations",
    speaker: "Chris Achinga",
    venue: "RC3",
  },
  {
    title:
      "Hosting Decentralized Applications with Walrus Protocol: A Hands-On Workshop",
    speaker: "Erick Okello",
    venue: "RC4",
  },
  {
    title: "Demystifying the Al Black Box through Transparent UX Patterns",
    speaker: "Kelvin Asiago",
    venue: "RC6",
  },
  {
    title: "Offline-First loT",
    speaker: "Zachary Odhiambo",
    venue: "RC7",
  },
  {
    title:
      "Deploying Multi-Agent Systems using MCP and A2A with ADK on Vertex Al",
    speaker: "Brayan Kai",
    venue: "RC8",
  },
];

export function WorkshopsSection() {
  const [showFirstGroup, setShowFirstGroup] = useState(true);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const displayedWorkshops = showFirstGroup
    ? workshops.slice(0, 7)
    : workshops.slice(7, 15);

  // ✅ FIXED IntersectionObserver – refs are created AFTER render
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [displayedWorkshops]);

  // ✅ Reset animation when switching groups
  useEffect(() => {
    setVisibleCards([]);
  }, [showFirstGroup]);

  return (
    <section id="workshops" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Workshops & Hands-On Labs
          </h2>
          <p className="text-xl text-muted-foreground">
            Deep-dive sessions facilitated by experts.
          </p>
        </div>

        {/* ✅ Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-purple-600 rounded-full p-1 w-full max-w-[520px]">
            {/* FIRST GROUP */}
            <button
              onClick={() => setShowFirstGroup(true)}
              className={`flex-1 flex flex-col items-center justify-center rounded-full py-3 px-4 transition-all
              ${
                showFirstGroup
                  ? "bg-white text-purple-600 shadow"
                  : "text-white"
              }`}
            >
              <span className="text-sm font-semibold">
                Workshops & Hands-On Labs 1
              </span>
              <span className="flex items-center gap-1 text-xs mt-1">
                <Clock className="w-3.5 h-3.5" />
                11:00 AM – 11:45 AM
              </span>
            </button>

            {/* SECOND GROUP */}
            <button
              onClick={() => setShowFirstGroup(false)}
              className={`flex-1 flex flex-col items-center justify-center rounded-full py-3 px-4 transition-all
              ${
                !showFirstGroup
                  ? "bg-white text-purple-600 shadow"
                  : "text-white"
              }`}
            >
              <span className="text-sm font-semibold">
                Workshops & Hands-On Labs 2
              </span>
              <span className="flex items-center gap-1 text-xs mt-1">
                <Clock className="w-3.5 h-3.5" />
                12:15 PM – 1:00 PM
              </span>
            </button>
          </div>
        </div>

        {/* ✅ Workshops Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
          transition-all duration-500"
        >
          {displayedWorkshops.map((workshop, index) => {
            const globalIndex = index; // reused for visibility tracking

            return (
              <div
                key={globalIndex}
                data-index={globalIndex}
                ref={(el) => (cardRefs.current[globalIndex] = el)}
                className={`group transition-all duration-700 ${
                  visibleCards.includes(globalIndex)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`glass rounded-3xl p-6 flex flex-col h-full transition-all
                    ${showFirstGroup ? "bg-white/60" : "bg-gray-200/60"}
                  `}
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition">
                    {workshop.title}
                  </h3>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{workshop.speaker}</span>
                    </div>

                    {/* <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{workshop.time}</span>
                    </div> */}

                    <div className="flex items-center gap-2 text-accent-green">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {workshop.venue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
