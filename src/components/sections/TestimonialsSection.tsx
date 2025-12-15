import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Customer Sentry completely transformed how we handle feedback. We went from spending 15 hours a week manually categorizing tickets to having actionable insights in real-time. Our churn rate dropped 28% in the first quarter.",
    author: "Sarah Chen",
    role: "VP of Customer Success",
    company: "ScaleFlow Technologies",
    rating: 5,
    avatar: "SC",
  },
  {
    quote:
      "The AI categorization is incredibly accurate. It caught product issues we didn't even know existed and helped us prioritize our roadmap based on actual customer needs. Our NPS jumped 22 points.",
    author: "Marcus Rodriguez",
    role: "Chief Product Officer",
    company: "Elevate SaaS",
    rating: 5,
    avatar: "MR",
  },
  {
    quote:
      "Finally, a tool that gives our leadership team real visibility into customer sentiment without the noise. The executive dashboards are beautiful, and the insights are genuinely actionable.",
    author: "Emily Thompson",
    role: "Head of Customer Experience",
    company: "NexGen Analytics",
    rating: 5,
    avatar: "ET",
  },
];

const companyLogos = [
  "Stripe",
  "Notion",
  "Figma", 
  "Slack",
  "Zoom",
  "Shopify",
  "HubSpot",
  "Intercom",
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-section font-display text-foreground mb-4">
            Trusted by{" "}
            <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 10,000+ customer-centric teams who rely on Customer Sentry 
            to understand their customers and drive growth.
          </p>
        </motion.div>

        {/* Logo Strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {companyLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-xl md:text-2xl font-display text-muted opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer"
            >
              {logo}
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
