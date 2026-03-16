import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

export default function Testimonials() {
  return (
    <SectionWrapper id="avis" dark>
      <SectionHeader
        label={testimonials.sectionLabel}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        light
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.reviews.map((review, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-electric-500/30 hover:bg-white/10"
          >
            {/* Quote Icon */}
            <Quote
              size={32}
              className="mb-4 text-electric-500/30"
            />

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="mb-6 text-base leading-relaxed text-navy-200">
              &ldquo;{review.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500/20 text-sm font-bold text-electric-400">
                {review.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{review.name}</div>
                <div className="text-xs text-navy-400">Client vérifié</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
