// ============================================================
// FICHIER DE CONTENU CENTRALISÉ
// Toutes les données et tous les textes du site sont ici.
// Modifiez ce fichier pour mettre à jour le site sans toucher
// au code des composants.
// ============================================================

/** Coordonnées et informations légales de l'entreprise. */
export const company = {
  name: 'Fabien Auffret',
  role: 'Électricien',
  /** Nom complet utilisé pour le SEO et les données structurées. */
  fullName: 'Fabien Auffret — Électricien',
  /** URL canonique du site en production. */
  url: 'https://www.fabien-auffret.fr',

  phoneDisplay: '07 83 10 00 12',
  phoneLink: 'tel:+33783100012',

  address: {
    street: 'Bateau Larissa, Rue du Port',
    postalCode: '45360',
    locality: 'Châtillon-sur-Loire',
    region: 'Loiret',
    country: 'FR',
  },

  /** Coordonnées géographiques pour le SEO local (JSON-LD). */
  geo: { latitude: 47.5933, longitude: 2.7575 },

  rating: { value: '5.0', count: 3 },

  /** Lien et iframe Google Maps. */
  maps: {
    embed: 'https://www.google.com/maps?q=Rue+du+Port,+45360+Ch%C3%A2tillon-sur-Loire&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=Rue+du+Port,+45360+Ch%C3%A2tillon-sur-Loire',
  },
} as const;

/** Horaires d'ouverture (affichage + données structurées). */
export const openingHours = {
  display: 'Lundi – Samedi : 09h00 – 19h00',
  closed: 'Dimanche : fermé',
  /** Format Schema.org. */
  schema: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '19:00',
  },
} as const;

/** Liens de navigation (ancres internes de la page unique). */
export const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Section Hero. */
export const hero = {
  badge: '5,0 / 5 sur Google',
  title: 'Électricien de confiance à Châtillon-sur-Loire',
  subtitle:
    'Installation, dépannage et rénovation électrique. Un travail soigné, des tarifs justes et un service professionnel pour tous vos projets, chez les particuliers comme chez les professionnels.',
  highlights: [
    'Devis gratuit & sans engagement',
    'Intervention rapide',
    'Travail conforme aux normes NF C 15-100',
  ],
  ctaPrimary: { label: 'Demander un devis', href: '#contact' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
} as const;

/** Icônes minimalistes disponibles (voir le composant Icon). */
export type IconName =
  | 'bolt'
  | 'wrench'
  | 'home'
  | 'shield'
  | 'check'
  | 'star'
  | 'phone'
  | 'pin'
  | 'clock'
  | 'mail'
  | 'arrow';

/** Section Services. */
export const services = {
  label: 'Mes prestations',
  title: 'Des services électriques complets',
  subtitle:
    "De l'installation neuve à la mise aux normes, je vous propose un accompagnement complet et professionnel.",
  items: [
    {
      icon: 'bolt' as IconName,
      title: 'Installation électrique',
      description:
        'Installation complète pour constructions neuves et extensions : tableaux électriques, prises, éclairage et câblage aux normes NF C 15-100.',
    },
    {
      icon: 'wrench' as IconName,
      title: 'Dépannage & réparation',
      description:
        'Intervention rapide pour vos pannes, courts-circuits et disjoncteurs défaillants. Diagnostic précis et réparation efficace.',
    },
    {
      icon: 'home' as IconName,
      title: 'Rénovation électrique',
      description:
        'Remise à neuf de votre installation : remplacement du câblage ancien, modernisation du tableau et mise en conformité complète.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Mise aux normes',
      description:
        'Vérification et mise en conformité de votre installation selon les normes en vigueur, avec diagnostic électrique détaillé.',
    },
  ],
} as const;

/** Section À propos. */
export const about = {
  label: 'À propos',
  title: 'Un électricien passionné, à votre service',
  paragraphs: [
    "Je suis Fabien Auffret, électricien indépendant basé à Châtillon-sur-Loire. Passionné par mon métier, je mets un point d'honneur à réaliser un travail très soigné sur chaque chantier, de la petite intervention à la rénovation complète.",
    "Mon approche repose sur l'écoute, la précision et la transparence. Je prends le temps de comprendre vos besoins pour vous proposer des solutions adaptées, fiables et conformes aux normes en vigueur.",
    'Que vous soyez un particulier ou un professionnel, je vous accompagne de A à Z dans tous vos projets électriques, avec sérieux et réactivité.',
  ],
  stats: [
    { value: '5,0/5', label: 'Note Google' },
    { value: '100 %', label: 'Clients satisfaits' },
    { value: '6j/7', label: 'Disponibilité' },
  ],
} as const;

/** Section « Pourquoi me choisir ». */
export const reasons = {
  label: 'Pourquoi me choisir',
  title: 'La tranquillité d’esprit, du devis à la finition',
  items: [
    {
      icon: 'check' as IconName,
      title: 'Travail soigné',
      description: 'Des finitions impeccables et un chantier propre, sur chaque intervention.',
    },
    {
      icon: 'bolt' as IconName,
      title: 'Réactivité',
      description: 'Une intervention rapide et une réponse à votre demande sous 24h.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Conformité garantie',
      description: 'Des installations réalisées dans le strict respect des normes électriques.',
    },
    {
      icon: 'star' as IconName,
      title: 'Tarifs justes',
      description: 'Un devis gratuit, clair et transparent, sans mauvaise surprise.',
    },
  ],
} as const;

/**
 * Section Avis clients.
 * Les 3 premiers avis proviennent de Google. Les suivants sont des
 * exemples réalistes à remplacer par de vrais avis clients : il suffit
 * d'ajouter / modifier les entrées du tableau ci-dessous.
 */
export const testimonials = {
  label: 'Avis clients',
  title: 'Ce que disent mes clients',
  subtitle: 'La satisfaction de mes clients est ma meilleure carte de visite.',
  reviews: [
    {
      name: 'Yves Mas',
      initials: 'YM',
      rating: 5,
      text: 'Travail très soigné, résultat impeccable.',
    },
    {
      name: 'Bertrand Rousseau',
      initials: 'BR',
      rating: 5,
      text: "A été à l'écoute de mes attentes sur mon chantier d'électricité. Il est très consciencieux, avec un tarif correct en comparaison des autres devis.",
    },
    {
      name: 'Michel Paul',
      initials: 'MP',
      rating: 5,
      text: 'Un bon professionnel.',
    },
    {
      name: 'Sophie Lemaire',
      initials: 'SL',
      rating: 5,
      text: 'Intervention rapide pour une panne de tableau électrique. Diagnostic clair et réparation efficace, je recommande vivement.',
    },
    {
      name: 'Julien Bernard',
      initials: 'JB',
      rating: 5,
      text: "Rénovation complète de l'installation électrique de notre maison. Travail propre, dans les délais et au prix annoncé. Parfait.",
    },
    {
      name: 'Catherine Petit',
      initials: 'CP',
      rating: 5,
      text: 'Très professionnel et de bon conseil. Ponctuel et soigneux, il a su répondre à toutes nos questions. Merci !',
    },
  ],
} as const;

/** Bandeau d'appel à l'action (section intermédiaire avec photo). */
export const ctaBand = {
  label: 'Un projet en tête ?',
  title: 'Confiez vos travaux électriques à un professionnel',
  subtitle:
    "Particulier ou professionnel, bénéficiez d'un devis gratuit et de conseils adaptés à votre projet.",
} as const;

/** Section Contact. */
export const contact = {
  label: 'Contact',
  title: 'Demandez votre devis gratuit',
  subtitle:
    "Besoin d'un électricien ? Contactez-moi pour un devis gratuit et sans engagement. Je vous réponds sous 24h.",
  form: {
    name: 'Votre nom complet',
    phone: 'Votre numéro de téléphone',
    message: 'Décrivez votre projet ou votre besoin…',
    submit: 'Envoyer ma demande',
  },
} as const;

/** Zones d'intervention (communes du Loiret autour de Châtillon-sur-Loire). */
export const serviceArea = {
  primary: 'Châtillon-sur-Loire',
  towns: [
    'Briare',
    'Gien',
    'Beaulieu-sur-Loire',
    'Bonny-sur-Loire',
    'Ousson-sur-Loire',
    'Saint-Brisson-sur-Loire',
  ],
} as const;

/** SEO — métadonnées par défaut de la page. */
export const seo = {
  title: 'Fabien Auffret | Électricien à Châtillon-sur-Loire (45)',
  description:
    'Fabien Auffret, électricien à Châtillon-sur-Loire (45). Installation, dépannage, rénovation et mise aux normes électriques. Devis gratuit, intervention rapide. ☎ 07 83 10 00 12.',
  /** Image Open Graph (1200×630, générée dans /public). */
  ogImage: '/og-image.png',
  locale: 'fr_FR',
} as const;
