import { motion } from "framer-motion";

export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="mb-16 text-center">
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide ${
            light
              ? "bg-electric-500/20 text-electric-300"
              : "bg-electric-50 text-electric-600"
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-navy-300" : "text-navy-500"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
