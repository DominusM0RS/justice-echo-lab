import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Educate Yourself
            </a>
          </nav>

          {/* Center Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              TIME<span className="text-accent">2</span>JUSTICE
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Chatbot Advisor
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Consult Lawyers
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;