// ============================================
// CONTENT DATA FILE — All French text & data
// Edit this file to update site copy without
// touching any component code.
// ============================================

export const siteInfo = {
  companyName: "Fabien Auffret",
  tagline: "Électricien",
  fullName: "Fabien Auffret — Électricien",
  address: "Bateau Larissa, Rue du Port, 45360 Châtillon-sur-Loire",
  phone: "07 83 10 00 12",
  phoneLink: "tel:+33783100012",
  hours: "Ouvert jusqu'à 19:00",
  rating: "5.0",
  ratingCount: "3",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.5!2d2.7575!3d47.5933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e93a8b8b8b8b8b%3A0x0!2sBateau%20Larissa%2C%20Rue%20du%20Port%2C%2045360%20Ch%C3%A2tillon-sur-Loire!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
};

export const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Électricien de confiance à Châtillon-sur-Loire",
  subtitle:
    "Installation, dépannage et rénovation électrique. Un travail soigné, des tarifs justes et un service professionnel pour tous vos projets.",
  ctaPrimary: "Contactez-moi",
  ctaSecondary: "Découvrir mes services",
  backgroundImage:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=80",
  badge: "⭐ 5.0/5 sur Google",
};

export const about = {
  sectionLabel: "À propos",
  title: "Un électricien passionné, à votre service",
  paragraphs: [
    "Je suis Fabien Auffret, électricien indépendant basé à Châtillon-sur-Loire. Passionné par mon métier, je mets un point d'honneur à réaliser un travail très soigné sur chaque chantier, qu'il s'agisse d'une petite intervention ou d'une rénovation complète.",
    "Mon approche repose sur l'écoute, la précision et la transparence. Je prends le temps de comprendre vos besoins pour vous proposer des solutions adaptées, fiables et conformes aux normes en vigueur.",
    "Que vous soyez un particulier ou un professionnel, je vous accompagne de A à Z dans tous vos projets électriques avec sérieux et réactivité.",
  ],
  image:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Électricien professionnel au travail — Fabien Auffret",
  stats: [
    { value: "5.0/5", label: "Note Google" },
    { value: "100%", label: "Clients satisfaits" },
    { value: "7j/7", label: "Disponibilité" },
  ],
};

export const services = {
  sectionLabel: "Services",
  title: "Des prestations complètes pour tous vos besoins",
  subtitle:
    "De l'installation neuve à la mise aux normes, je vous propose un service complet et professionnel.",
  items: [
    {
      icon: "Zap",
      title: "Installation électrique",
      description:
        "Installation complète pour constructions neuves et extensions. Tableaux électriques, prises, éclairage et câblage aux normes NF C 15-100.",
    },
    {
      icon: "Wrench",
      title: "Dépannage & Réparation",
      description:
        "Intervention rapide pour tous vos problèmes électriques : pannes, courts-circuits, disjoncteurs défaillants. Diagnostic précis et réparation efficace.",
    },
    {
      icon: "Home",
      title: "Rénovation électrique",
      description:
        "Remise à neuf de votre installation électrique. Remplacement de câblage ancien, modernisation du tableau et mise en conformité complète.",
    },
    {
      icon: "ShieldCheck",
      title: "Mise aux normes",
      description:
        "Vérification et mise en conformité de votre installation selon les normes en vigueur. Diagnostic électrique et certificat de conformité.",
    },
  ],
};

export const testimonials = {
  sectionLabel: "Avis clients",
  title: "Ce que disent mes clients",
  subtitle: "La satisfaction de mes clients est ma meilleure carte de visite.",
  reviews: [
    {
      name: "Yves Mas",
      rating: 5,
      text: "Travail très soigné, résultat impeccable.",
      avatar: "YM",
    },
    {
      name: "Bertrand Rousseau",
      rating: 5,
      text: "A été à l'écoute de mes attentes de mon chantier d'électricité, il est très consciencieux, et un tarif correct en comparant avec les autres devis.",
      avatar: "BR",
    },
    {
      name: "Michel Paul",
      rating: 5,
      text: "Un bon professionnel.",
      avatar: "MP",
    },
  ],
};

export const contact = {
  sectionLabel: "Contact",
  title: "Demandez votre devis gratuit",
  subtitle:
    "Besoin d'un électricien ? Contactez-moi pour un devis gratuit et sans engagement. Je vous réponds sous 24h.",
  form: {
    namePlaceholder: "Votre nom complet",
    phonePlaceholder: "Votre numéro de téléphone",
    messagePlaceholder: "Décrivez votre projet ou besoin...",
    submitButton: "Envoyer ma demande",
  },
  mapPlaceholder: "La carte Google Maps sera intégrée ici",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Fabien Auffret — Électricien. Tous droits réservés.`,
  quickLinks: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ],
};

// JSON-LD Structured Data for Local SEO
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Fabien Auffret — Électricien",
  image:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  url: "https://www.fabien-auffret.fr",
  telephone: "+33783100012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bateau Larissa, Rue du Port",
    addressLocality: "Châtillon-sur-Loire",
    postalCode: "45360",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.5933,
    longitude: 2.7575,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
  },
  priceRange: "€€",
};
