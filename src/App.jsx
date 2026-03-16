import { HelmetProvider, Helmet } from "react-helmet-async";
import { jsonLd, siteInfo } from "./data/content";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Fabien Auffret | Électricien à Châtillon-sur-Loire — Installation, Dépannage, Rénovation</title>
        <meta
          name="description"
          content="Fabien Auffret, électricien professionnel à Châtillon-sur-Loire (45360). Noté 5/5 sur Google. Installation, dépannage, rénovation et mise aux normes. Travail très soigné. Devis gratuit au 07 83 10 00 12."
        />
        <meta
          name="keywords"
          content="électricien, Châtillon-sur-Loire, installation électrique, dépannage, rénovation, mise aux normes, Fabien Auffret, 45360"
        />
        <meta name="author" content="Fabien Auffret" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fabien-auffret.fr" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fabien-auffret.fr" />
        <meta
          property="og:title"
          content="Fabien Auffret | Électricien à Châtillon-sur-Loire"
        />
        <meta
          property="og:description"
          content="Électricien professionnel noté 5/5 sur Google. Installation, dépannage et rénovation électrique. Travail très soigné, devis gratuit."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
        />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fabien Auffret | Électricien à Châtillon-sur-Loire"
        />
        <meta
          name="twitter:description"
          content="Électricien professionnel noté 5/5 sur Google. Installation, dépannage et rénovation électrique. Travail très soigné, devis gratuit."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
