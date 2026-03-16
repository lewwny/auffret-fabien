import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-900/10 ${className}`}
    >
      {children}
    </motion.article>
  );
}
