# Fabien Auffret — Électricien

Site vitrine **one-page** de Fabien Auffret, électricien à Châtillon-sur-Loire (45).

## Stack technique

Construit avec **[Astro](https://astro.build)** + **[Tailwind CSS v4](https://tailwindcss.com)**.

> **Pourquoi Astro ?** C'est la stack de référence pour un site vitrine ultra-rapide
> et parfaitement indexable : génération de pages 100 % statiques, **zéro JavaScript
> par défaut** (seul un script minimal est livré pour le menu mobile), HTML sémantique
> et CSS minifié. C'est le meilleur choix pour viser un score Lighthouse de 100/100.

- **Police** : Inter (variable), auto-hébergée via `@fontsource-variable/inter` — aucune requête réseau externe.
- **SEO** : balises meta complètes, Open Graph, Twitter Card, données structurées JSON-LD (`Electrician`), sitemap et `robots.txt`.
- **Qualité de code** : Prettier + ESLint (configuration Astro).

## Démarrage

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement → http://localhost:4321
npm run build    # build de production → dossier dist/
npm run preview  # prévisualise le build de production
```

Autres commandes :

```bash
npm run check    # vérification des types (astro check)
npm run lint     # analyse ESLint
npm run format   # formatage Prettier
```

## Structure du projet

```
public/              Fichiers statiques (favicon, image OG, robots.txt)
src/
  components/        Composants de section (Header, Hero, Services…)
  data/site.ts       ← TOUT le contenu du site (textes, coordonnées…)
  layouts/           Layout principal (<head> SEO, JSON-LD)
  pages/             index.astro (one-page) + mentions-legales.astro
  styles/            global.css (thème Tailwind, couleurs de marque)
astro.config.mjs     Configuration Astro + intégration sitemap
```

## Modifier le contenu

Tout le contenu éditorial (coordonnées, services, avis, textes) est centralisé
dans **`src/data/site.ts`**. Aucune connaissance technique n'est nécessaire pour
mettre à jour les textes : il suffit de modifier ce fichier.

## Points à compléter avant la mise en ligne

- **Formulaire de contact** : déjà branché sur **Netlify Forms** (voir
  `src/components/Contact.astro`). Une seule étape reste à faire côté Netlify pour
  recevoir les demandes par e-mail :
  1. Déployer le site sur Netlify (les formulaires ne fonctionnent que sur
     l'hébergement Netlify — le formulaire est détecté automatiquement au build).
  2. Netlify → **Site settings → Forms → Form notifications → Add notification →
     Email notification**, puis saisir l'adresse **fabienauffret45@outlook.fr**.

  Les soumissions sont aussi consultables à tout moment dans l'onglet **Forms**
  du tableau de bord Netlify.
- **Mentions légales** : compléter les champs `[à compléter]` dans
  `src/pages/mentions-legales.astro` (SIRET, TVA, hébergeur).
- **Nom de domaine** : ajuster `site` dans `astro.config.mjs` si le domaine final
  diffère de `https://www.fabien-auffret.fr`.

## Déploiement

Le site est 100 % statique : le dossier `dist/` généré par `npm run build` peut
être déployé tel quel sur n'importe quel hébergeur statique (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, OVH…).
