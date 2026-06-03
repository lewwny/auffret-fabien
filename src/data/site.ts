// ============================================================
// FICHIER DE CONTENU CENTRALISÉ
// Toutes les données et tous les textes du site sont ici.
// Modifiez ce fichier pour mettre à jour le site sans toucher
// au code des composants.
// ============================================================

/** Coordonnées et informations légales de l'entreprise. */
export const company = {
  name: 'Fabien Auffret',
  role: 'Électricien · Plombier',
  /** Ligne affichée sous le logo dans l'en-tête. */
  metaLine: 'Électricité · Plomberie · Climatisation',
  /** Nom complet utilisé pour le SEO et les données structurées. */
  fullName: 'Fabien Auffret — Électricien & Plombier',
  /** URL canonique du site en production. */
  url: 'https://fabienauffret.fr',

  phoneDisplay: '06 26 20 48 19',
  phoneLink: 'tel:+33626204819',

  email: 'fabienauffret45@outlook.fr',
  emailLink: 'mailto:fabienauffret45@outlook.fr',

  address: {
    extended: 'Bateau « Rescula »',
    street: 'Rue Port de Plaisance',
    postalCode: '45360',
    locality: 'Châtillon-sur-Loire',
    region: 'Loiret',
    regionCode: '45',
    country: 'FR',
  },

  /** Coordonnées géographiques pour le SEO local (JSON-LD). */
  geo: { latitude: 47.5933, longitude: 2.7575 },

  /** Rayon d'intervention en kilomètres autour du siège. */
  radiusKm: 50,

  /** Identifiants légaux. */
  siren: '880387949',
  siret: '88038794900014',
  sirenDisplay: '880 387 949',
  siretDisplay: '880 387 949 00014',

  /** Note moyenne issue de Google (3 avis réels — donnée vérifiable). */
  rating: { value: '5.0', count: 3 },

  /** Référence éditoriale affichée dans les éléments « spec sheet ». */
  ref: 'FA-2026',

  /** Lien et iframe Google Maps. */
  maps: {
    embed:
      'https://www.google.com/maps?q=Rue+Port+de+Plaisance,+45360+Ch%C3%A2tillon-sur-Loire&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=Rue+Port+de+Plaisance,+45360+Ch%C3%A2tillon-sur-Loire',
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
  title: ['Électricien & plombier', 'de confiance,', 'à Châtillon.'] as const,
  /** Ligne mise en valeur dans le titre (index 0-based du tableau ci-dessus). */
  emphasisLine: 1,
  underbar: 'Électricité · Plomberie · Climatisation · Domotique · Dépannage',
  subtitle:
    'Électricité, plomberie, climatisation et domotique — en neuf comme en rénovation. Un travail soigné et un service de proximité, dans un rayon de 50 km autour de Châtillon-sur-Loire.',
  ctaPrimary: { label: 'Demander un devis', href: '#contact' },
  ctaSecondary: { label: 'Voir mes services', href: '#services' },
  /** Lignes de la carte « spec sheet » à droite du héros. */
  specs: [
    'Devis gratuit & sans engagement',
    'Intervention rapide — réponse sous 24 h',
    'Travaux conformes aux normes en vigueur',
    'Particuliers & professionnels',
  ],
  /** Statistiques affichées en bas du héros. */
  stats: [
    { value: '5,0', unit: '/5', label: 'Note Google · 3 avis' },
    { value: '100', unit: '%', label: 'Clients satisfaits' },
    { value: '24', unit: 'h', label: 'Délai de réponse' },
    { value: '50', unit: 'km', label: "Rayon d'intervention" },
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
  title: ['Tous vos travaux', 'au même endroit.'] as const,
  emphasisLine: 1,
  lead: 'Électricité, plomberie, climatisation et domotique — en neuf comme en rénovation, dépannage et mise aux normes.',
  items: [
    {
      title: 'Électricité générale',
      description:
        'Installation, rénovation et mise en conformité : tableaux, prises, éclairage et câblage aux normes NF C 15-100, en neuf comme en rénovation.',
    },
    {
      title: 'Plomberie sanitaire',
      description:
        "Réseaux d'eau, alimentation et évacuation, salle de bains et raccordements — installation soignée et dépannage de fuites.",
    },
    {
      title: 'Climatisation',
      description:
        "Pose et entretien de climatisations et pompes à chaleur, en neuf comme en rénovation, pour un confort optimal toute l'année.",
    },
    {
      title: 'Domotique',
      description:
        "Pilotez votre maison : éclairage connecté, volets, chauffage et objets intelligents pour plus de confort et d'économies d'énergie.",
    },
    {
      title: 'Dépannage',
      description:
        'Intervention rapide pour vos pannes électriques et fuites de plomberie. Diagnostic précis et réparation efficace.',
    },
    {
      title: 'Mise aux normes',
      description:
        'Vérification et mise en conformité de vos installations selon les normes en vigueur, avec diagnostic détaillé.',
    },
  ],
} as const;

/** Section À propos. Les fragments `<span class="em">` sont rendus avec `set:html`. */
export const about = {
  index: '03 — PROFIL',
  label: 'À propos',
  title: ['Un artisan', 'passionné,', 'à votre service.'] as const,
  emphasisLine: 1,
  lead: "Indépendant. Polyvalent. À l'écoute.",
  paragraphs: [
    'Je suis Fabien Auffret, <span class="em">artisan électricien et plombier</span> indépendant basé à Châtillon-sur-Loire. Passionné par mon métier, je mets un point d\'honneur à réaliser un travail très soigné sur chaque chantier, de la petite intervention à la rénovation complète.',
    'De l\'<span class="em">électricité à la plomberie</span>, en passant par la climatisation et la domotique, je vous accompagne en neuf comme en rénovation avec des solutions fiables et conformes aux normes en vigueur.',
    "Mon approche repose sur l'écoute, la précision et la transparence — pour les particuliers comme pour les professionnels, dans un rayon de 50 km autour de Châtillon-sur-Loire.",
  ],
  /** Carte d'information sous les paragraphes. */
  infoCard: [
    { label: 'Note Google', value: '5,0', suffix: '/ 5' },
    { label: 'Clients satisfaits', value: '100', suffix: '%' },
    { label: "Rayon d'action", value: '50', suffix: 'km' },
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
      description: 'Installations conformes au strict respect des normes en vigueur.',
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
  title: ['Confiez vos travaux', 'à un artisan', 'de confiance.'] as const,
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
      phone: '06 00 00 00 00',
      message: 'Rénovation, dépannage, installation neuve, climatisation…',
    },
    submit: 'Envoyer ma demande',
  },
} as const;

/** Zones d'intervention (communes du Loiret autour de Châtillon-sur-Loire). */
export const serviceArea = {
  tag: "Zones d'intervention",
  title: ['Jusqu’à', '50 km', 'autour de Châtillon.'] as const,
  emphasisLine: 1,
  primary: 'Châtillon-sur-Loire',
  towns: [
    'Briare',
    'Gien',
    'Beaulieu-sur-Loire',
    'Bonny-sur-Loire',
    'Ousson-sur-Loire',
    'Saint-Brisson-sur-Loire',
    'Sully-sur-Loire',
    'Cosne-sur-Loire',
  ],
} as const;

/** SEO — métadonnées par défaut de la page. */
export const seo = {
  title: 'Fabien Auffret | Électricien & plombier à Châtillon-sur-Loire (45)',
  description:
    'Fabien Auffret, électricien et plombier à Châtillon-sur-Loire (45). Électricité, plomberie, climatisation, domotique, dépannage et mise aux normes — neuf et rénovation. Devis gratuit dans un rayon de 50 km. ☎ 06 26 20 48 19.',
  /** Image Open Graph (1200×630, générée dans /public). */
  ogImage: '/og-image.png',
  locale: 'fr_FR',
} as const;
