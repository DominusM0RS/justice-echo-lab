import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about-us" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link to="/educate-yourself" className="text-foreground hover:text-accent transition-colors">
              Educate Yourself
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
              TIME<span className="text-accent">2</span>JUSTICE
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/chatbot-advisor" className="text-foreground hover:text-accent transition-colors">
              Chatbot Advisor
            </Link>
            <Link to="/consult-lawyers" className="text-foreground hover:text-accent transition-colors">
              Consult Lawyers
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;