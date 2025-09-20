import ServiceCard from "./ServiceCard";
import { 
  Scale, 
  FileText, 
  Shield, 
  GitCompare, 
  FileQuestion, 
  Reply, 
  FileCheck, 
  Search 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Legal Query Solver",
      description: "Ask anything you would ask a lawyer or a judge.",
      icon: <Scale />,
    },
    {
      title: "Draft Document",
      description: "Just ask you legal advisor and it would be done in an instant!",
      icon: <FileText />,
    },
    {
      title: "AI Background Check",
      description: "Verify background or create profile using AI",
      icon: <Shield />,
      isBeta: true,
    },
    {
      title: "Compare Documents",
      description: "Comparing documents is boring but a necessary evil.",
      icon: <GitCompare />,
    },
    {
      title: "Query on Document",
      description: "Upload a document and ask me anything from the document",
      icon: <FileQuestion />,
    },
    {
      title: "Reply on Document",
      description: "Upload the legal notice or other document and I will prepare the reply for you.",
      icon: <Reply />,
    },
    {
      title: "Summarise Document",
      description: "Upload a document and I will give you the summary.",
      icon: <FileCheck />,
    },
    {
      title: "Search",
      description: "Search for Bare Acts, Specific Sections, Past Cases, Circulars, Notifications, Gazette and much more..",
      icon: <Search />,
    },
  ];

  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isBeta={service.isBeta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;