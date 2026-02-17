import { AlertTriangle, Eye, Scale, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Data Vulnerable in Use",
    description: "While data is encrypted at rest and in transit, it must be decrypted during AI processing—exposing cleartext to cloud providers and AI vendors."
  },
  {
    icon: Scale,
    title: "Regulatory Compliance Gap",
    description: "The EU AI Act and GDPR mandate strict data sovereignty. Black box models in foreign jurisdictions create unmanageable legal risk for European enterprises."
  },
  {
    icon: HelpCircle,
    title: "No Independent Verification",
    description: "Enterprises must rely solely on provider promises that data isn't logged or used for training. Trust without proof is not enterprise-grade security."
  }
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Trust Gap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Privacy-Innovation
            <br />
            <span className="text-muted-foreground">Paradox</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As of 2026, LLM adoption in regulated sectors faces a critical bottleneck: 
            organizations cannot share proprietary data with cloud AI vendors.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-destructive/30 transition-all duration-300 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
