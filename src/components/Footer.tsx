import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">DevFest Mt. Kenya 2025</h3>
            <p className="text-sm text-muted-foreground">
              Organized by GDG Mt. Kenya
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent-green to-accent-yellow rounded-full mb-2 mx-auto md:ml-auto md:mr-0" />
            <p className="text-sm text-muted-foreground">
              Built for DevFest 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
