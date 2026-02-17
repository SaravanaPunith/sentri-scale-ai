import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-40" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8 shadow-glow">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Bridge the
            <br />
            <span className="text-gradient">Trust Gap?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join leading enterprises in healthcare, finance, and legal sectors 
            who are already using hardware-enforced AI privacy to unlock innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Schedule Technical Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Download Whitepaper
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Questions? Reach out to our enterprise team
            </p>
            <a 
              href="mailto:dwi4kia2h@mozmail.com" 
              className="text-primary hover:underline font-medium"
            >
              dwi4kia2h@mozmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
