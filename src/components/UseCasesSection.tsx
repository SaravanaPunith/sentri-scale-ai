import { Heart, TrendingUp, Scale } from "lucide-react";

const useCases = [
  {
    icon: Heart,
    industry: "MedTech",
    title: "Healthcare AI Without Compromise",
    description: "Analyze patient records using AI without violating HIPAA or GDPR. Enable breakthrough diagnostics while maintaining absolute patient privacy.",
    example: "Radiology AI analysis of protected health records"
  },
  {
    icon: TrendingUp,
    industry: "FinTech",
    title: "Blind Analytics for Finance",
    description: "Detect fraud and analyze sensitive transactions while keeping data 'blind' to the cloud host. Protect customer financial data at the hardware level.",
    example: "Real-time transaction fraud detection"
  },
  {
    icon: Scale,
    industry: "LegalTech",
    title: "Privileged Document Analysis",
    description: "Automate contract analysis and legal research while maintaining strict Attorney-Client privilege. AI-powered insights without disclosure risk.",
    example: "Confidential M&A document review"
  }
];

const UseCasesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-glow opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-glow opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Target
            <br />
            <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enabling AI innovation in the most regulated industries
          </p>
        </div>

        {/* Use cases */}
        <div className="max-w-5xl mx-auto space-y-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon and industry badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <useCase.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-foreground">
                      {useCase.industry}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm">
                    <span className="text-muted-foreground">Example:</span>
                    <span className="text-foreground font-medium">{useCase.example}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
