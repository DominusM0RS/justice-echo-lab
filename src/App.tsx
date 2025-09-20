import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import EducateYourself from "./pages/EducateYourself";
import ConsultLawyers from "./pages/ConsultLawyers";
import LawyerProfile from "./pages/LawyerProfile";
import ChatbotAdvisor from "./pages/ChatbotAdvisor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/educate-yourself" element={<EducateYourself />} />
          <Route path="/consult-lawyers" element={<ConsultLawyers />} />
          <Route path="/lawyer/:id" element={<LawyerProfile />} />
          <Route path="/chatbot-advisor" element={<ChatbotAdvisor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
