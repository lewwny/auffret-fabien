import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { about } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <SectionWrapper id="a-propos" className="bg-navy-50">
      <SectionHeader label={about.sectionLabel} title={about.title} />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/10">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-electric-500/20" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-5"
        >
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-navy-600 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}

          {/* Trust Indicators */}
          <div className="flex items-center gap-2 pt-2 text-electric-600">
            <CheckCircle size={20} />
            <span className="text-sm font-semibold">
              Travail soigné garanti — Devis gratuit
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border border-navy-100 bg-white p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-electric-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-navy-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
