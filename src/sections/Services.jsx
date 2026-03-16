import { Zap, Wrench, Home, ShieldCheck } from "lucide-react";
import { services } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const iconMap = {
  Zap,
  Wrench,
  Home,
  ShieldCheck,
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        label={services.sectionLabel}
        title={services.title}
        subtitle={services.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={index} delay={index * 0.1} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-50 text-electric-600 transition-colors duration-300 group-hover:bg-electric-500 group-hover:text-white">
                {Icon && <Icon size={28} />}
              </div>
              <h3 className="mb-3 text-lg font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-500">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
