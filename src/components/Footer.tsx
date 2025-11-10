import { Github, Linkedin, Mail, Twitter, MapPin, Phone, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-footer)] opacity-10"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              StockTracker
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-time stock market data for 100+ global companies. Track, analyze, and invest smarter.
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <User className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Rohit Kumar Maurya</p>
                  <p className="text-muted-foreground text-xs">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Markets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Watchlist</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>Sector 62, Noida, Uttar Pradesh 201301, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 9456XXXX88</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@stocktracker.com" className="hover:text-primary transition-colors">rohitXX@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://github.com/rohitmaurya3545" className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary hover:scale-110 transition-transform flex items-center justify-center text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/rohitmaurya3545" className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary to-accent hover:scale-110 transition-transform flex items-center justify-center text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kumar-maurya-525355248/" className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-primary hover:scale-110 transition-transform flex items-center justify-center text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 StockTracker.</p>
          <p className="mt-2">Smart way to track markets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
