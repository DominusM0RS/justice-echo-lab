import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const legalFacts = [
  {
    id: 1,
    category: "Constitutional Law",
    title: "Miranda Rights Must Be Read Upon Arrest",
    content: "Police are required to inform suspects of their rights before interrogation, including the right to remain silent and the right to an attorney. This comes from the 1966 Supreme Court case Miranda v. Arizona.",
    readTime: "2 min",
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    id: 2,
    category: "Contract Law",
    title: "Verbal Contracts Are Legally Binding",
    content: "Contrary to popular belief, verbal agreements can be legally enforceable contracts. However, certain types of contracts (like real estate transactions) must be in writing under the Statute of Frauds.",
    readTime: "3 min",
    color: "bg-green-500/10 text-green-400"
  },
  {
    id: 3,
    category: "Criminal Law",
    title: "Double Jeopardy Protection",
    content: "The Fifth Amendment prevents someone from being tried twice for the same crime. However, this doesn't apply to separate state and federal charges for the same act, as they're considered different sovereigns.",
    readTime: "2 min",
    color: "bg-red-500/10 text-red-400"
  },
  {
    id: 4,
    category: "Employment Law",
    title: "At-Will Employment Has Exceptions",
    content: "While most US employees work 'at-will,' employers cannot fire employees for illegal reasons like discrimination, retaliation for filing complaints, or refusing to break the law.",
    readTime: "3 min",
    color: "bg-purple-500/10 text-purple-400"
  },
  {
    id: 5,
    category: "Property Law",
    title: "Adverse Possession Can Transfer Ownership",
    content: "If someone openly occupies another's property for a statutory period (varies by state), they may gain legal ownership through adverse possession, even without the owner's permission.",
    readTime: "4 min",
    color: "bg-orange-500/10 text-orange-400"
  },
  {
    id: 6,
    category: "Family Law",
    title: "Common-Law Marriage Recognition",
    content: "Only a few US states recognize common-law marriages, where couples are considered legally married without a ceremony or license, typically requiring cohabitation and presenting as married.",
    readTime: "3 min",
    color: "bg-pink-500/10 text-pink-400"
  },
  {
    id: 7,
    category: "Intellectual Property",
    title: "Copyright Exists Upon Creation",
    content: "Copyright protection begins automatically when an original work is created and fixed in a tangible medium. Registration provides additional benefits but isn't required for basic copyright protection.",
    readTime: "2 min",
    color: "bg-cyan-500/10 text-cyan-400"
  },
  {
    id: 8,
    category: "Tort Law",
    title: "Statute of Limitations Varies by State",
    content: "The time limit to file a lawsuit varies significantly by state and type of claim. Personal injury claims typically range from 1-6 years, while contract disputes can be 3-10 years.",
    readTime: "3 min",
    color: "bg-yellow-500/10 text-yellow-400"
  }
];

const EducateYourself = () => {
  const [current, setCurrent] = useState(0);

  const nextCard = () => setCurrent((prev) => (prev + 1 < legalFacts.length ? prev + 1 : prev));
  const prevCard = () => setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educate Yourself
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick legal facts and insights to help you understand your rights and the law
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">{legalFacts.length} Legal Facts Available</span>
          </div>
        </div>
      </section>

      {/* Facts Stacked Card Slider */}
      <section className="py-12 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-md h-[350px] flex items-center justify-center">
            {legalFacts.map((fact, idx) => (
              <div
                key={fact.id}
                className={`absolute w-full transition-all duration-500 ${
                  idx === current
                    ? "opacity-100 scale-100 z-20"
                    : idx < current
                    ? "opacity-0 -translate-x-24 scale-95 z-10"
                    : "opacity-0 translate-x-24 scale-95 z-10"
                }`}
                style={{
                  pointerEvents: idx === current ? "auto" : "none",
                }}
              >
                <Card className="h-full shadow-lg border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={fact.color}>
                        {fact.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        {fact.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight text-foreground">
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {fact.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevCard}
              disabled={current === 0}
              className={`p-2 rounded-full border ${current === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/20"}`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-sm text-muted-foreground">
              Card {current + 1} of {legalFacts.length}
            </span>
            <button
              onClick={nextCard}
              disabled={current === legalFacts.length - 1}
              className={`p-2 rounded-full border ${current === legalFacts.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/20"}`}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Want to Learn More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just the basics. For specific legal questions about your situation, 
            consider consulting with one of our qualified attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/chatbot-advisor" 
              className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
            >
              Ask Our AI Advisor
            </a>
            <a 
              href="/consult-lawyers" 
              className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors"
            >
              Consult a Lawyer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducateYourself;
