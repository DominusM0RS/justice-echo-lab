import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/legal-hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                AI Legal Advisor
              </h1>
              <p className="text-xl text-muted-foreground">
                AI powered legal platform for all your legal needs
              </p>
              <p className="text-lg text-muted-foreground">
                Try Time2Justice for Free
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
              >
                Ask a Legal Query
              </Button>
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg"
              >
                AI Background check (Beta)
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 rounded-full p-12 max-w-md">
              <img 
                src={heroIllustration} 
                alt="Legal AI Advisor Illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;