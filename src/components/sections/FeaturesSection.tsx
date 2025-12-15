import { motion } from "framer-motion";
import { 
  BarChart3, 
  Brain, 
  Share2, 
  Smile, 
  FileText, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Monitor customer sentiment, feedback volume, and emerging trends as they happen. Get instant visibility into what your customers are saying across all channels.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI-Powered Categorization",
    description: "Our machine learning engine automatically tags, categorizes, and prioritizes feedback by topic, sentiment, and business impact—eliminating hours of manual work.",
    color: "accent-gold",
  },
  {
    icon: Share2,
    title: "50+ Native Integrations",
    description: "Connect seamlessly with Zendesk, Intercom, Salesforce, HubSpot, Slack, and 45+ other tools. Capture feedback from every customer touchpoint automatically.",
    color: "accent-green",
  },
  {
    icon: Smile,
    title: "Advanced Sentiment Analysis",
    description: "Go beyond positive/negative. Detect frustration, confusion, delight, and urgency with nuanced NLP that understands context and customer intent.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Executive-Ready Reports",
    description: "Generate beautiful, shareable reports in seconds. Customize dashboards for different stakeholders—from support leads to the C-suite.",
    color: "accent-gold",
  },
  {
    icon: Users,
    title: "Team Collaboration Tools",
    description: "Assign feedback to team members, track resolution status, and collaborate on action items. Built-in workflows keep everyone aligned on customer priorities.",
    color: "accent-green",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary border-primary",
  "accent-gold": "bg-accent/10 text-accent border-accent",
  "accent-green": "bg-accent-green/10 text-accent-green border-accent-green",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-section font-display text-foreground mb-4">
            Everything You Need to Master{" "}
            <span className="text-primary">Customer Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete feedback analytics platform built for customer-obsessed teams. 
            Powerful enough for enterprises, simple enough to get started in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                colorClasses[feature.color as keyof typeof colorClasses].split(" ")[2]
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  colorClasses[feature.color as keyof typeof colorClasses].split(" ").slice(0, 2).join(" ")
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
