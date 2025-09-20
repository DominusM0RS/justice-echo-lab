import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Lightbulb, Shield, AlertTriangle } from "lucide-react";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatbotAdvisor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI Legal Advisor. I can help answer general legal questions and guide you toward the right resources. Please note that this is not a substitute for professional legal advice. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const commonQuestions = [
    "What are my rights during a traffic stop?",
    "How do I file a small claims court case?",
    "What should I do if I'm injured at work?",
    "Can I break my lease early?",
    "How do I protect my intellectual property?",
    "What are the steps to form an LLC?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: generateBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('traffic') || lowerInput.includes('police') || lowerInput.includes('stop')) {
      return "During a traffic stop, you have the right to remain silent and the right to refuse searches of your vehicle (though police can search if they have probable cause). Keep your hands visible, be polite, and provide your license and registration when requested. If you believe your rights were violated, document everything and consult with a criminal defense attorney.";
    }
    
    if (lowerInput.includes('small claims') || lowerInput.includes('court')) {
      return "Small claims court is designed for disputes involving smaller amounts of money (limits vary by state, typically $2,500-$10,000). You'll need to file a complaint with the court, serve the defendant, and present your case. Gather all relevant documents, receipts, and evidence. Most small claims courts don't allow attorneys, so you'll represent yourself.";
    }
    
    if (lowerInput.includes('work') || lowerInput.includes('injured') || lowerInput.includes('workplace')) {
      return "If you're injured at work, immediately report the injury to your supervisor and seek medical attention. File a workers' compensation claim with your employer's insurance. Keep detailed records of your injury, treatment, and any lost wages. Consider consulting with a workers' compensation attorney, especially for serious injuries.";
    }
    
    if (lowerInput.includes('lease') || lowerInput.includes('rent') || lowerInput.includes('apartment')) {
      return "Breaking a lease early can result in penalties, but there are legal reasons that may allow it: military deployment, domestic violence, uninhabitable conditions, or landlord's failure to provide essential services. Review your lease agreement for early termination clauses. Some states allow you to find a replacement tenant to avoid penalties.";
    }
    
    if (lowerInput.includes('intellectual property') || lowerInput.includes('copyright') || lowerInput.includes('trademark')) {
      return "To protect intellectual property: For copyrights, your work is protected upon creation, but registration provides additional benefits. For trademarks, use the ™ symbol and consider federal registration. For patents, file applications early as the US uses 'first-to-file' system. Consider consulting with an IP attorney for valuable assets.";
    }
    
    if (lowerInput.includes('llc') || lowerInput.includes('business') || lowerInput.includes('company')) {
      return "To form an LLC: 1) Choose a unique name, 2) File Articles of Organization with your state, 3) Create an Operating Agreement, 4) Obtain an EIN from the IRS, 5) Open a business bank account, 6) Obtain necessary licenses/permits. Consider consulting with a business attorney to ensure proper setup and compliance.";
    }
    
    return "That's an interesting legal question. For specific advice tailored to your situation, I'd recommend consulting with one of our qualified attorneys who can provide personalized guidance based on your state's laws and your particular circumstances. Would you like me to help you find a lawyer who specializes in this area?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Legal Advisor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your legal questions with our AI-powered advisor
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 px-6 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <strong className="text-destructive">Important Disclaimer:</strong> This AI advisor provides general legal information only and is not a substitute for professional legal advice. For specific legal matters, please consult with a qualified attorney.
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8 px-6 flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-accent" />
                    Legal AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-0">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {message.type === 'bot' && (
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-accent" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-accent text-accent-foreground'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <div className="text-xs opacity-60 mt-2">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          {message.type === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex gap-3 justify-start">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-accent" />
                          </div>
                          <div className="bg-muted p-3 rounded-lg">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Ask your legal question..."
                        className="flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={!inputMessage.trim() || isTyping}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5" />
                    Quick Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {commonQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5" />
                    Need More Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    For complex legal matters or personalized advice, consider consulting with one of our qualified attorneys.
                  </p>
                  <Button className="w-full" variant="outline">
                    Find a Lawyer
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Family Law</Badge>
                    <Badge variant="outline">Criminal Defense</Badge>
                    <Badge variant="outline">Personal Injury</Badge>
                    <Badge variant="outline">Employment</Badge>
                    <Badge variant="outline">Real Estate</Badge>
                    <Badge variant="outline">Business Law</Badge>
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

export default ChatbotAdvisor;