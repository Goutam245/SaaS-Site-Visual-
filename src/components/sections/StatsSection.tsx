import { motion } from "framer-motion";
import { Building2, MessageSquare, ThumbsUp, Puzzle } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "10,000+",
    label: "Companies Worldwide",
    description: "trust Customer Sentry",
  },
  {
    icon: MessageSquare,
    value: "500M+",
    label: "Feedback Analyzed",
    description: "and counting",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Customer Satisfaction",
    description: "average rating",
  },
  {
    icon: Puzzle,
    value: "50+",
    label: "Native Integrations",
    description: "with your tools",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-display text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-foreground font-medium">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
