import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultLawyers = () => {
  const lawyers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Mergers & Acquisitions", "Securities"],
      experience: "15 years",
      rating: 4.9,
      reviews: 124,
      location: "New York, NY",
      hourlyRate: "$450",
      availability: "Available Today",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 123-4567",
      email: "s.johnson@time2justice.ai"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Criminal Defense Attorney",
      specialties: ["Criminal Defense", "DUI/DWI", "White Collar Crime"],
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      location: "Los Angeles, CA",
      hourlyRate: "$350",
      availability: "Available Tomorrow",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 234-5678",
      email: "m.chen@time2justice.ai"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Family Law Specialist",
      specialties: ["Divorce", "Child Custody", "Adoption"],
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      location: "Chicago, IL",
      hourlyRate: "$300",
      availability: "Available Today",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 345-6789",
      email: "e.rodriguez@time2justice.ai"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Personal Injury Attorney",
      specialties: ["Personal Injury", "Medical Malpractice", "Product Liability"],
      experience: "18 years",
      rating: 4.7,
      reviews: 203,
      location: "Houston, TX",
      hourlyRate: "$400",
      availability: "Available Next Week",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 456-7890",
      email: "d.thompson@time2justice.ai"
    },
    {
      id: 5,
      name: "Lisa Kim",
      title: "Intellectual Property Lawyer",
      specialties: ["Patents", "Trademarks", "Copyright"],
      experience: "14 years",
      rating: 4.8,
      reviews: 78,
      location: "San Francisco, CA",
      hourlyRate: "$425",
      availability: "Available Today",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 567-8901",
      email: "l.kim@time2justice.ai"
    },
    {
      id: 6,
      name: "Robert Wilson",
      title: "Real Estate Attorney",
      specialties: ["Real Estate", "Property Development", "Zoning"],
      experience: "20 years",
      rating: 4.9,
      reviews: 167,
      location: "Miami, FL",
      hourlyRate: "$375",
      availability: "Available Tomorrow",
      image: "/api/placeholder/150/150",
      phone: "+1 (555) 678-9012",
      email: "r.wilson@time2justice.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Consult Our Lawyers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced attorneys who specialize in your legal needs
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              All Specialties
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Corporate Law
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Criminal Defense
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Family Law
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Personal Injury
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Intellectual Property
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
              Real Estate
            </Badge>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((lawyer) => (
              <Card key={lawyer.id} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {lawyer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{lawyer.name}</h3>
                  <p className="text-muted-foreground">{lawyer.title}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-foreground">{lawyer.rating}</span>
                    <span className="text-muted-foreground">({lawyer.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{lawyer.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{lawyer.availability}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {lawyer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-bold text-accent">{lawyer.hourlyRate}/hr</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium text-foreground">{lawyer.experience}</span>
                    </div>
                    <Link to={`/lawyer/${lawyer.id}`}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which lawyer is right for your case? Our AI advisor can help match you 
            with the perfect attorney for your specific legal needs.
          </p>
          <Link to="/chatbot-advisor">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get AI Recommendation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConsultLawyers;