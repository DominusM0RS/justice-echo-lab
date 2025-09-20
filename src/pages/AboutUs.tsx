import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, Users, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About TIME<span className="text-accent">2</span>JUSTICE
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Democratizing legal access through AI-powered solutions, connecting individuals 
            with the legal help they need when they need it most.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that everyone deserves access to quality legal advice and representation. 
                Our platform bridges the gap between complex legal processes and everyday people 
                who need guidance.
              </p>
              <p className="text-muted-foreground">
                Through cutting-edge AI technology and a network of qualified legal professionals, 
                we're making justice more accessible, affordable, and efficient for everyone.
              </p>
            </div>
            <div className="flex justify-center">
              <Scale className="w-64 h-64 text-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Trust</h3>
                <p className="text-muted-foreground">
                  Building confidence through transparency and reliable legal guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making legal services available to everyone, regardless of background.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering high-quality legal solutions with professional standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Justice</h3>
                <p className="text-muted-foreground">
                  Ensuring fair and equitable legal outcomes for all our users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our team combines legal expertise with technological innovation to provide 
              unparalleled service in the legal tech space.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">AI-powered support available around the clock</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Qualified lawyers in our network</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;