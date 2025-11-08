import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import ChrisAchinga from "../assets/chrisachinga.jpg";
import Samuelmacharia from "../assets/samuelmacharia.jpg"
import ManaiMortadha from "../assets/manaimortadha.jpg"
import BrayanKai from "../assets/brayankai.jpg"
import ZacharyOdhiambo from "../assets/zacharyodhiambo.jpg"
import KelvinAsiago from "../assets/klvinasiago.jpg"
import ErickOkelloh from "../assets/erickokelloh.jpg"
import AlexMwangi  from "../assets/alexmwangi.jpg"
import SimonJuma from "../assets/simonjuma.jpg"
import AlexNyambura from "../assets/alexnyumbara.jpg"
import GilbertChris from "../assets/gilbertchris.jpg"
import AlexMuturi from "../assets/alexmuturi.jpg"
import LevisKamau from "../assets/leviskamau.jpg"
import MwangiEphraim from "../assets/mwangiephraim.jpg"
import IanDancan from "../assets/iandancan.jpg"
import BerthaKasiera from "../assets/berthakasiera.jpg"
import SheilaOtuko from "../assets/sheilaotuko.jpg"
import OluwatobiFagbohungbe from "../assets/oluwatobi.jpg"
import SavioWambugu  from "../assets/saviowambugu.jpg"
import MonicahMwanzia from "../assets/monicahmwanzia.jpg"

const speakers = [
  {
    name: "Chris Achinga",
    role: "Lead Software Engineer",
    company: "Swahili Pot",
    image: ChrisAchinga,
  },
  {
    name: "Samuelmacharia",
    role: "Cloud Devops Engineer",
    company: "-",
    image: Samuelmacharia,
  },
   {
    name: "Manai Mortadha",
    role: "Ai Engineer",
    company: "Netflix",
    image: ManaiMortadha
,
  },
   {
    name: "Brayan Kai",
    role: "Data Scientist",
    company: "-",
    image: BrayanKai,
  },
   {
    name: "Zachary Odhiambo",
    role: "Research Assistant",
    company: "DSAIL",
    image: ZacharyOdhiambo,
  },
   {
    name: "Kelvin Asiago",
    role: "Product Designer",
    company: "GOAT Technologies",
    image: KelvinAsiago,
  },
   {
    name: "Erick Okelloh",
    role: "Blockchain Developer",
    company: "Swahili Pot",
    image: ErickOkelloh,
  },
   {
    name: "Alex Mwangi",
    role: "Full Stack Dev | QA/QE Engineer",
    company: "-",
    image: AlexMwangi,
  },
   {
    name: "Simon Juma",
    role: " Software Engineer",
    company: "-",
    image: SimonJuma,
  },
   {
    name: "Alex Nyambura",
    role: "Cloud Engineer",
    company: "-",
    image: AlexNyambura,
  },
   {
    name: "Gilbert Chris",
    role: "Backend Developer",
    company: "-",
    image: GilbertChris,
  },
   {
    name: "Alex Muturi",
    role: " Software Engineer",
    company: " UnstackedLabs",
    image: AlexMuturi,
  },
   {
    name: "Levis Kamau",
    role: "Research assistant",
    company: "DSAIL",
    image: LevisKamau,
  },
   {
    name: "Mwangi Ephraim",
    role: "IOT Trainer | Embedded Design Engineer",
    company: "-",
    image: MwangiEphraim,
  },
   {
    name: "Ian Dancan",
    role: " Software Engineer(Java + Springboot)",
    company: "-",
    image: IanDancan,
  },
   {
    name: "Bertha Kasiera",
    role: "PromptBI Analyst Delta40",
    company: "PromptBI",
    image: BerthaKasiera,
  },
   {
    name: "Sheila Otuko",
    role: "CEO UmemeSense",
    company: "UmemeSense",
    image: SheilaOtuko,
  },
   {
    name: "Oluwatobi Fagbohungbe",
    role: "CEO QaceAcademy",
    company: "QaceAcademy",
    image: OluwatobiFagbohungbe,
  },
   {
    name: "Savio Wambugu",
    role: "CEO MHub",
    company: "MHub",
    image: SavioWambugu,
  },
   {
    name: "Monicah Mwanzia",
    role: "Analysis and Program Lead",
    company: "PromptBI",
    image: MonicahMwanzia,
  },
];

export function SpeakersSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 6);

  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Speakers
          </h2>
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
                    src={`${speaker.image}`}
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
                <p className="text-sm text-muted-foreground mb-1">
                  {speaker.role}
                </p>
                <p className="text-xs font-semibold text-accent-green mb-3">
                  {speaker.company}
                </p>
                

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href="#"
                    className="p-2 rounded-full hover:bg-primary/10 transition-smooth"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full hover:bg-primary/10 transition-smooth"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full hover:bg-primary/10 transition-smooth"
                  >
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
              <span className="inline-block group-hover:translate-x-1 transition-smooth">
                →
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
