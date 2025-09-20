import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isBeta?: boolean;
}

const ServiceCard = ({ title, description, icon, isBeta }: ServiceCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 cursor-pointer group">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-accent text-4xl group-hover:scale-110 transition-transform">
            {icon}
          </div>
          {isBeta && (
            <Badge variant="secondary" className="bg-muted text-muted-foreground">
              BETA
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-accent group-hover:text-accent/80 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;