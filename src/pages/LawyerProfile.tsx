import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Clock, Phone, Mail, ArrowLeft, Calendar, Award, BookOpen } from "lucide-react";

const LawyerProfile = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const lawyerData = {
    "1": {
      name: "Sarah Johnson",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Mergers & Acquisitions", "Securities"],
      experience: "15 years",
      rating: 4.9,
      reviews: 124,
      location: "New York, NY",
      hourlyRate: "$450",
      availability: "Available Today",
      phone: "+1 (555) 123-4567",
      email: "s.johnson@time2justice.ai",
      bio: "Sarah Johnson is a highly experienced corporate attorney with over 15 years of practice. She specializes in complex mergers and acquisitions, securities law, and corporate governance. Sarah has successfully represented Fortune 500 companies and startups alike in their most critical business transactions.",
      education: [
        "J.D., Harvard Law School (2008)",
        "B.A., Economics, Yale University (2005)"
      ],
      barAdmissions: ["New York", "Connecticut", "New Jersey"],
      languages: ["English", "Spanish", "French"],
      achievements: [
        "Super Lawyers Rising Star (2015-2018)",
        "Best Lawyers in America (2019-2024)",
        "Chambers USA Recognition (2020-2024)"
      ],
      recentCases: [
        "Led $2.4B acquisition of tech startup by Fortune 100 company",
        "Structured IPO for renewable energy company raising $500M",
        "Advised on complex cross-border merger in pharmaceutical industry"
      ]
    }
    // Add other lawyers here...
  };

  const lawyer = id ? lawyerData[id] : undefined;

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Lawyer Not Found</h1>
          <Link to="/consult-lawyers">
            <Button>Back to Lawyers</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 px-6 bg-card">
        <div className="container mx-auto">
          <Link to="/consult-lawyers" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Lawyers
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-muted flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">
                    {lawyer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-grow text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lawyer.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{lawyer.title}</p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4">
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
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {lawyer.specialties.map((specialty, index) => (
                  <Badge key={index} className="bg-accent/10 text-accent">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 text-center lg:text-right">
              <div className="text-3xl font-bold text-accent mb-2">{lawyer.hourlyRate}</div>
              <div className="text-muted-foreground">per hour</div>
              <div className="text-sm text-muted-foreground mt-2">{lawyer.experience} experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    About
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{lawyer.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Notable Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {lawyer.recentCases.map((case_, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{case_}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-foreground">{lawyer.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-foreground">{lawyer.email}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lawyer.education.map((edu, index) => (
                      <li key={index} className="text-muted-foreground">{edu}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bar Admissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {lawyer.barAdmissions.map((bar, index) => (
                      <Badge key={index} variant="outline">{bar}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lawyer.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground text-sm">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {lawyer.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary">{lang}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerProfile;