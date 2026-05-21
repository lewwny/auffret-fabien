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
    street: 'Rue du Port',
    extended: 'Bateau Larissa',
    postalCode: '45360',
    locality: 'Châtillon-sur-Loire',
    region: 'Loiret',
    regionCode: '45',
    country: 'FR',
  },

  /** Coordonnées géographiques pour le SEO local (JSON-LD). */
  geo: { latitude: 47.5933, longitude: 2.7575 },

  /** Note moyenne issue de Google (3 avis réels — donnée vérifiable). */
  rating: { value: '5.0', count: 3 },

  /** Référence éditoriale affichée dans les éléments « spec sheet ». */
  ref: 'FA-2026',

  /** Lien et iframe Google Maps. */
  maps: {
    embed: 'https://www.google.com/maps?q=Rue+du+Port,+45360+Ch%C3%A2tillon-sur-Loire&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=Rue+du+Port,+45360+Ch%C3%A2tillon-sur-Loire',
  },
} as const;

/** Horaires d'ouverture (affichage + données structurées). */
export const openingHours = {
  display: 'Lun. – Sam. · 09 h – 19 h',
  closed: 'Dimanche : fermé',
  short: 'Lun.–Sam. · 09–19 h',
  /** Format Schema.org. */
  schema: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
} as const;

/** Liens de navigation (ancres internes de la page unique). */
export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Section Hero. */
export const hero = {
  status: 'Disponible — devis sous 24 h',
  ratingLabel: '5,0 sur Google',
  title: ['Votre électricien', 'de confiance,', 'à Châtillon.'] as const,
  /** Mot mis en italique bleu dans le titre (correspond à l'index du tableau ci-dessus). */
  emphasisLine: 1,
  underbar: 'Installation · Dépannage · Rénovation · Mise aux normes',
  subtitle:
    'Installation, dépannage et rénovation électrique. Un travail soigné, des tarifs justes et un service professionnel pour tous vos projets — particuliers comme professionnels.',
  ctaPrimary: { label: 'Demander un devis', href: '#contact' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
  /** Lignes de la carte « spec sheet » à droite du héros. */
  specs: [
    'Devis gratuit & sans engagement',
    'Intervention rapide — réponse sous 24 h',
    'Travaux conformes NF C 15-100',
    'Particuliers & professionnels',
  ],
  /** Statistiques affichées en bas du héros. */
  stats: [
    { value: '5,0', unit: '/5', label: 'Note Google · 3 avis' },
    { value: '100', unit: '%', label: 'Clients satisfaits' },
    { value: '24', unit: 'h', label: 'Délai de réponse' },
    { value: '6', unit: 'j/7', label: 'Disponibilité' },
  ],
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
  index: '02 — SERVICES',
  label: 'Mes prestations',
  title: ['Des services électriques', 'complets.'] as const,
  emphasisLine: 1,
  lead: "De l'installation neuve à la mise aux normes — un accompagnement complet, pensé pour durer.",
  items: [
    {
      title: 'Installation électrique',
      description:
        'Installation complète pour constructions neuves et extensions : tableaux, prises, éclairage et câblage aux normes NF C 15-100.',
    },
    {
      title: 'Dépannage & réparation',
      description:
        'Intervention rapide pour vos pannes, courts-circuits et disjoncteurs défaillants. Diagnostic précis et réparation efficace.',
    },
    {
      title: 'Rénovation électrique',
      description:
        'Remise à neuf de votre installation : remplacement du câblage ancien, modernisation du tableau, mise en conformité complète.',
    },
    {
      title: 'Mise aux normes',
      description:
        'Vérification et mise en conformité de votre installation selon les normes en vigueur, avec diagnostic électrique détaillé.',
    },
  ],
} as const;

/** Section À propos. Les fragments `<span class="em">` sont rendus avec `set:html`. */
export const about = {
  index: '03 — PROFIL',
  label: 'À propos',
  title: ['Un électricien', 'passionné,', 'à votre service.'] as const,
  emphasisLine: 1,
  lead: 'Indépendant. Précis. Transparent.',
  paragraphs: [
    'Je suis Fabien Auffret, <span class="em">électricien indépendant</span> basé à Châtillon-sur-Loire. Passionné par mon métier, je mets un point d\'honneur à réaliser un travail très soigné sur chaque chantier, de la petite intervention à la rénovation complète.',
    'Mon approche repose sur l\'<span class="em">écoute, la précision et la transparence</span>. Je prends le temps de comprendre vos besoins pour vous proposer des solutions adaptées, fiables et conformes aux normes en vigueur.',
    'Particulier ou professionnel, je vous accompagne de A à Z dans tous vos projets électriques, avec sérieux et réactivité.',
  ],
  /** Carte d'information sous les paragraphes. */
  infoCard: [
    { label: 'Note Google', value: '5,0', suffix: '/ 5' },
    { label: 'Clients satisfaits', value: '100', suffix: '%' },
    { label: 'Disponibilité', value: '6', suffix: 'J/7' },
  ],
} as const;

/** Section « Pourquoi me choisir ». */
export const reasons = {
  index: '04 — ENGAGEMENTS',
  label: 'Pourquoi me choisir',
  title: ['La tranquillité, du devis', 'à la finition.'] as const,
  emphasisLine: 1,
  lead: 'Quatre engagements simples — tenus sur chaque chantier.',
  items: [
    {
      icon: 'check' as IconName,
      title: 'Travail soigné',
      description: 'Finitions impeccables et chantier propre — sur chaque intervention.',
    },
    {
      icon: 'bolt' as IconName,
      title: 'Réactivité',
      description: 'Intervention rapide et réponse à votre demande sous 24 h.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Conformité',
      description: 'Installations conformes au strict respect des normes électriques.',
    },
    {
      icon: 'star' as IconName,
      title: 'Tarifs justes',
      description: 'Un devis gratuit, clair et transparent — sans mauvaise surprise.',
    },
  ],
} as const;

/** Bandeau d'appel à l'action (section intermédiaire avec photo). */
export const ctaBand = {
  tag: 'Un projet en tête ?',
  title: ['Confiez vos travaux', 'électriques', 'à un professionnel.'] as const,
  emphasisLine: 1,
  subtitle:
    "Particulier ou professionnel, bénéficiez d'un devis gratuit et de conseils adaptés à votre projet.",
} as const;

/** Section Contact. */
export const contact = {
  index: '05 — CONTACT',
  label: 'Devis',
  title: ['Demandez votre', 'devis gratuit.'] as const,
  emphasisLine: 1,
  lead: 'Réponse sous 24 h. Devis gratuit et sans engagement.',
  form: {
    step: 'VOS COORDONNÉES',
    fields: {
      name: 'Prénom Nom',
      phone: '07 00 00 00 00',
      message: 'Rénovation, dépannage, installation neuve…',
    },
    submit: 'Envoyer ma demande',
  },
} as const;

/** Zones d'intervention (communes du Loiret autour de Châtillon-sur-Loire). */
export const serviceArea = {
  tag: "Zones d'intervention",
  title: ['Au cœur du', 'Loiret.'] as const,
  emphasisLine: 1,
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
