import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  CreditCard,
  Headphones,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import logoFull from "@/assets/logo-full.png";

const steps = [
  { id: 1, title: "Account" },
  { id: 2, title: "Company" },
  { id: 3, title: "Setup" },
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

const industries = [
  "SaaS / Software",
  "E-commerce",
  "Financial Services",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Other",
];

const roles = [
  "CEO / Founder",
  "Product Manager",
  "Customer Success Lead",
  "Support Manager",
  "Marketing",
  "Engineering",
  "Other",
];

const tools = [
  "Zendesk",
  "Intercom",
  "Salesforce",
  "HubSpot",
  "Freshdesk",
  "Help Scout",
  "Slack",
  "Other",
];

const benefits = [
  { icon: Clock, text: "14-day free trial" },
  { icon: CreditCard, text: "No credit card required" },
  { icon: Sparkles, text: "Full feature access" },
  { icon: Users, text: "White-glove onboarding" },
  { icon: Headphones, text: "24/7 support" },
  { icon: Shield, text: "Cancel anytime" },
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    industry: "",
    role: "",
    challenge: "",
    tools: [] as string[],
    teamSize: 5,
    wantsOnboarding: true,
  });

  const updateFormData = (field: string, value: string | number | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTool = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-2xl shadow-card-hover p-12 text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-accent-green" />
          </motion.div>
          <h1 className="text-2xl font-display text-foreground mb-4">
            Welcome to Customer Sentry!
          </h1>
          <p className="text-muted-foreground mb-8">
            Check your email for login credentials and next steps. We're excited
            to have you on board!
          </p>
          <div className="space-y-3">
            <Button variant="default" className="w-full">
              Go to Dashboard
            </Button>
            <Button variant="outline" className="w-full">
              Schedule Onboarding Call
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl shadow-card p-8 md:p-12"
              >
                {/* Header */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-display text-foreground mb-2">
                    Start Your Free 14-Day Trial
                  </h1>
                  <p className="text-muted-foreground">
                    No credit card required. Full access to all features.
                  </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-12">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm transition-colors ${
                            currentStep >= step.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          {currentStep > step.id ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            step.id
                          )}
                        </div>
                        <span className="text-xs mt-2 text-muted-foreground">
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-16 md:w-24 h-1 mx-2 rounded transition-colors ${
                            currentStep > step.id
                              ? "bg-primary"
                              : "bg-muted/50"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Form Steps */}
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            value={formData.fullName}
                            onChange={(e) =>
                              updateFormData("fullName", e.target.value)
                            }
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Work Email *
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              updateFormData("email", e.target.value)
                            }
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company Name *
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) =>
                              updateFormData("company", e.target.value)
                            }
                            placeholder="Acme Inc"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number (optional)
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              updateFormData("phone", e.target.value)
                            }
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company Size *
                          </label>
                          <select
                            value={formData.companySize}
                            onChange={(e) =>
                              updateFormData("companySize", e.target.value)
                            }
                            className="flex h-12 w-full rounded-lg border border-muted bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select size</option>
                            {companySizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Industry *
                          </label>
                          <select
                            value={formData.industry}
                            onChange={(e) =>
                              updateFormData("industry", e.target.value)
                            }
                            className="flex h-12 w-full rounded-lg border border-muted bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select industry</option>
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Role *
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) =>
                            updateFormData("role", e.target.value)
                          }
                          className="flex h-12 w-full rounded-lg border border-muted bg-card px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select role</option>
                          {roles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          What's your biggest customer feedback challenge?
                        </label>
                        <textarea
                          value={formData.challenge}
                          onChange={(e) =>
                            updateFormData("challenge", e.target.value)
                          }
                          placeholder="Tell us about your current challenges..."
                          rows={4}
                          className="flex w-full rounded-lg border border-muted bg-card px-4 py-3 text-base text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-4">
                          Which tools do you currently use?
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {tools.map((tool) => (
                            <button
                              key={tool}
                              onClick={() => toggleTool(tool)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                formData.tools.includes(tool)
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted/30 text-foreground hover:bg-muted/50"
                              }`}
                            >
                              {tool}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-4">
                          How many team members will use Customer Sentry?
                        </label>
                        <div className="flex items-center gap-6">
                          <input
                            type="range"
                            min="1"
                            max="50"
                            value={formData.teamSize}
                            onChange={(e) =>
                              updateFormData("teamSize", parseInt(e.target.value))
                            }
                            className="flex-1 h-2 bg-muted/50 rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                          <span className="text-lg font-display text-foreground min-w-[60px] text-center">
                            {formData.teamSize}
                            {formData.teamSize === 50 ? "+" : ""}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={formData.wantsOnboarding}
                              onChange={(e) =>
                                updateFormData("wantsOnboarding", e.target.checked)
                              }
                              className="sr-only peer"
                            />
                            <div className="w-12 h-7 bg-muted/50 rounded-full peer peer-checked:bg-primary transition-colors" />
                            <div className="absolute left-1 top-1 w-5 h-5 bg-card rounded-full transition-transform peer-checked:translate-x-5 shadow" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              Schedule a personalized onboarding call
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Get a 30-minute walkthrough with our customer success team
                            </p>
                          </div>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    variant="default"
                    onClick={handleNext}
                    className="gap-2"
                  >
                    {currentStep === 3 ? "Create Account" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl shadow-card p-8"
                >
                  <h3 className="font-display text-lg text-foreground mb-6">
                    What you'll get
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit.text}
                        className="flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-accent-green" />
                        </div>
                        <span className="text-foreground">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-6 rounded-2xl bg-primary/5 border border-primary/20"
                >
                  <p className="text-sm text-muted-foreground">
                    "Customer Sentry helped us reduce response time by 60% and increase NPS by 15 points in just 2 months."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-display text-primary">
                      JD
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Jane Doe
                      </p>
                      <p className="text-xs text-muted-foreground">
                        CEO, TechStartup
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
