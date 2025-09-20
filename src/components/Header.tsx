import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              TIME<span className="text-accent">2</span>JUSTICE
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Talk to Lawyer
            </Button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Sign up
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;