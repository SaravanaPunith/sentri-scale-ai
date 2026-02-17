import { Layers, FileCheck, Cloud } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Vendor-Agnostic Router",
    description: "A unified API that allows seamless switching between models—Gemini, Llama 3, Claude—without changing your security architecture.",
    benefits: ["Single integration point", "No vendor lock-in", "Future-proof architecture"]
  },
  {
    icon: FileCheck,
    title: "Compliance Dashboard",
    description: "Automated generation of 'Certificates of Privacy' and audit logs for Data Protection Officers, proving hardware-level isolation for every request.",
    benefits: ["Audit-ready reports", "Real-time monitoring", "DPO-friendly interface"]
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Orchestration",
    description: "Deploy secure enclaves across AWS, Google Cloud, and Azure. Prevent infrastructure lock-in while maintaining consistent security guarantees.",
    benefits: ["Cross-cloud deployment", "Unified management", "Disaster recovery ready"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key Product
            <br />
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-ready capabilities designed for regulated industries
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
