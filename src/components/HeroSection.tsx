import { Shield, Lock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center shadow-card">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-card border border-border flex items-center justify-center shadow-card">
          <Lock className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-14 h-14 rounded-xl bg-gradient-card border border-border flex items-center justify-center shadow-card">
          <Cpu className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-medium text-muted-foreground">
            Hardware-Enforced AI Security
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
          <span className="text-foreground">Sovereign AI</span>
          <br />
          <span className="text-gradient">Trust Gateway</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Replace vendor trust with <span className="text-primary font-semibold">mathematical proof</span>. 
          Enterprise-grade AI privacy through hardware-level encryption that keeps your data invisible—even during processing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl">
            Request Demo
          </Button>
          <Button variant="heroOutline" size="xl">
            View Technical Brief
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">EU AI Act Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">HIPAA Compatible</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
