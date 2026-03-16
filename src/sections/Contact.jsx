import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { contact, siteInfo } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

const trustItems = [
  { icon: CheckCircle, text: "Devis gratuit et sans engagement" },
  { icon: CheckCircle, text: "Intervention rapide sous 24h" },
  { icon: CheckCircle, text: "Travail soigné et garanti" },
  { icon: CheckCircle, text: "Tarifs transparents et compétitifs" },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-navy-50">
      <SectionHeader
        label={contact.sectionLabel}
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left: CTA Card + Trust Items */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Big CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white shadow-2xl shadow-navy-900/20">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-electric-500/20 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm font-semibold text-yellow-400">5.0/5 sur Google</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                Appelez-moi directement
              </h3>
              <p className="mb-6 text-navy-300">
                La façon la plus rapide d'obtenir un devis ou de planifier une intervention. Je suis disponible du lundi au samedi jusqu'à 19h.
              </p>
              <Button
                href={siteInfo.phoneLink}
                variant="primary"
                icon={Phone}
                ariaLabel={`Appeler Fabien Auffret au ${siteInfo.phone}`}
                className="!text-lg !px-8 !py-4 w-full sm:w-auto"
              >
                {siteInfo.phone}
              </Button>
            </div>
          </div>

          {/* Trust Items */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5">
            <h3 className="mb-5 text-base font-bold text-navy-900">
              Pourquoi me choisir ?
            </h3>
            <ul className="space-y-3">
              {trustItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon size={18} className="shrink-0 text-electric-500" />
                  <span className="text-sm text-navy-600">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: Info Cards + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          {/* Info Cards */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5">
            <h3 className="mb-5 text-lg font-bold text-navy-900">
              Informations de contact
            </h3>
            <div className="space-y-4">
              <a
                href={siteInfo.phoneLink}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-navy-50"
                aria-label={`Appeler le ${siteInfo.phone}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Téléphone</div>
                  <div className="text-sm text-navy-500">{siteInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Adresse</div>
                  <div className="text-sm text-navy-500">{siteInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Horaires</div>
                  <div className="text-sm text-navy-500">{siteInfo.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg shadow-navy-900/5">
            {siteInfo.googleMapsEmbed ? (
              <iframe
                src={siteInfo.googleMapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de Fabien Auffret Électricien à Châtillon-sur-Loire"
              />
            ) : (
              <div className="flex h-[280px] flex-col items-center justify-center bg-navy-50 p-6 text-center">
                <MapPin size={40} className="mb-3 text-navy-300" />
                <p className="text-sm font-medium text-navy-500">
                  {contact.mapPlaceholder}
                </p>
                <p className="mt-1 text-xs text-navy-400">{siteInfo.address}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
