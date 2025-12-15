import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 10,000+ Customer-Centric Teams
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-display text-foreground mb-6 leading-tight">
              Turn Customer Feedback Into{" "}
              <span className="text-primary">Revenue Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Customer Sentry is the AI-powered feedback intelligence platform that 
              automatically collects, analyzes, and prioritizes customer insights—so 
              you can reduce churn, improve products, and scale customer success.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Link to="/get-started">
                <Button variant="hero" className="group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="heroOutline" className="group">
                <Play size={18} className="mr-2" />
                Watch 2-Min Demo
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent-green" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent-green" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent-green" />
                Setup in 5 minutes
              </span>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={dashboardMockup}
                  alt="Customer Sentry Dashboard - Real-time feedback analytics"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Metric Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-card rounded-xl shadow-card-hover p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-green/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-green text-lg">↑</span>
                  </div>
                  <div>
                    <p className="text-2xl font-display text-foreground">94%</p>
                    <p className="text-xs text-muted-foreground">CSAT Score</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-card rounded-xl shadow-card-hover p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent text-lg">★</span>
                  </div>
                  <div>
                    <p className="text-2xl font-display text-foreground">+47</p>
                    <p className="text-xs text-muted-foreground">NPS Score</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
