import { motion } from "framer-motion";
import saveTimeVisual from "@/assets/save-time-visual.png";
import retentionVisual from "@/assets/retention-visual.png";
import insightsVisual from "@/assets/insights-visual.png";

const benefits = [
  {
    image: saveTimeVisual,
    title: "Reclaim 20+ Hours Every Week",
    description:
      "Stop drowning in spreadsheets and manual feedback reviews. Customer Sentry automates the entire feedback analysis process, freeing your team to focus on strategic initiatives and customer relationships that drive growth.",
    stats: [
      { value: "20+", label: "Hours saved weekly" },
      { value: "85%", label: "Faster insights" },
    ],
  },
  {
    image: retentionVisual,
    title: "Cut Customer Churn by 30%",
    description:
      "Identify at-risk customers before they leave. Our predictive analytics detect early warning signs in customer feedback, enabling your team to intervene proactively and turn detractors into promoters.",
    stats: [
      { value: "30%", label: "Churn reduction" },
      { value: "2.5x", label: "ROI increase" },
    ],
  },
  {
    image: insightsVisual,
    title: "Build Products Customers Actually Want",
    description:
      "Make data-driven product decisions with confidence. Customer Sentry aggregates and prioritizes feature requests, pain points, and improvement suggestions directly from your customers' voices.",
    stats: [
      { value: "95%", label: "Feature adoption" },
      { value: "+15", label: "NPS improvement" },
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Why Customer Sentry
          </span>
          <h2 className="text-3xl md:text-section font-display text-foreground mb-4">
            Measurable Results That{" "}
            <span className="text-primary">Impact Your Bottom Line</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our customers see real, quantifiable improvements in efficiency, 
            retention, and product success. Here's what you can expect.
          </p>
        </motion.div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="bg-background rounded-2xl p-8 shadow-card">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-subsection font-display text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="flex gap-12">
                  {benefit.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-4xl font-display text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
