import { Lock, Cpu, Trash2, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lock,
    title: "Encrypt",
    description: "Data is encrypted on-premise by the customer before transmission.",
    color: "primary"
  },
  {
    number: "02",
    icon: Cpu,
    title: "Process",
    description: "Data is decrypted only inside the CPU/GPU vault, invisible to the cloud provider.",
    color: "primary"
  },
  {
    number: "03",
    icon: Trash2,
    title: "Shred",
    description: "Once results are generated, the ephemeral enclave is instantly destroyed—zero trace.",
    color: "primary"
  }
];

const SolutionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-glow opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hardware-Enforced
            <br />
            <span className="text-gradient">Privacy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Sovereign AI Trust Gateway acts as a secure, vendor-agnostic broker utilizing 
            <span className="text-primary font-semibold"> Trusted Execution Environments (TEEs)</span>—such as Intel TDX or AMD SEV-SNP—to create a "Digital Vault" in the cloud.
          </p>
        </div>

        {/* Zero-Persistence Workflow */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Zero-Persistence Workflow
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 -translate-y-1/2" />

            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Remote Attestation highlight */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/20 shadow-glow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-foreground">Remote Attestation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Before transmitting data, our system performs a <span className="text-primary font-semibold">cryptographic handshake</span> with the hardware. 
                  It verifies the server's "Security Birth Certificate" to prove the environment is untampered—replacing trust with mathematical proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
