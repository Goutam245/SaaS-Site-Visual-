import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const trustBadges = [
  { icon: Shield, label: "SOC 2 Type II Certified" },
  { icon: Lock, label: "GDPR & CCPA Compliant" },
  { icon: CheckCircle, label: "99.9% Uptime SLA" },
];

export function CTASection() {
  return (
    <section className="py-24 gradient-cta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-section font-display text-primary-foreground mb-6">
            Ready to Unlock the Voice of Your Customers?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Join 10,000+ customer-centric teams using Customer Sentry to drive 
            retention, improve products, and accelerate growth. Start your free 
            14-day trial today.
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10">
            <Input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 h-14 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
            />
            <Button variant="gold" size="lg" className="h-14 px-8 group">
              Start Free Trial
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <badge.icon className="w-5 h-5" />
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
