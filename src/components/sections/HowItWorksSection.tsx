import { motion } from "framer-motion";
import integrationsVisual from "@/assets/integrations-visual.png";
import aiVisual from "@/assets/ai-analysis-visual.png";
import growthVisual from "@/assets/growth-visual.png";

const steps = [
  {
    number: "01",
    image: integrationsVisual,
    title: "Connect Your Channels",
    description:
      "Seamlessly integrate with your existing support stack in under 5 minutes. Customer Sentry connects with Zendesk, Intercom, Freshdesk, Salesforce, email, chat widgets, and 50+ other platforms to capture every piece of customer feedback automatically.",
  },
  {
    number: "02",
    image: aiVisual,
    title: "AI Processes & Analyzes",
    description:
      "Our proprietary machine learning engine automatically categorizes feedback by topic, detects sentiment and urgency, identifies emerging trends, and surfaces the insights that matter most to your business—no manual tagging required.",
  },
  {
    number: "03",
    image: growthVisual,
    title: "Take Action & Grow",
    description:
      "Transform insights into outcomes. Receive prioritized recommendations, share visual reports with stakeholders, track improvements over time, and watch your customer satisfaction scores climb as you act on real customer needs.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-section font-display text-foreground mb-4">
            From Feedback to Action in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customer Sentry eliminates the manual work of collecting, organizing, 
            and analyzing customer feedback. Get started in minutes and see results immediately.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-display text-xl z-10">
                    {step.number}
                  </div>
                  <div className="bg-background rounded-2xl p-6 shadow-card">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-subsection font-display text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
