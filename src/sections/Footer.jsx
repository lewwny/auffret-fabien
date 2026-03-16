import { Zap, Phone, MapPin } from "lucide-react";
import { footer, siteInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#accueil"
              className="flex items-center gap-2 text-white"
              aria-label="Retour à l'accueil"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500">
                <Zap size={22} className="text-white" />
              </div>
              <div>
                <span className="text-lg font-bold leading-tight">
                  {siteInfo.companyName}
                </span>
                <span className="block text-xs text-navy-400">
                  {siteInfo.tagline}
                </span>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-400">
              Électricien professionnel à Châtillon-sur-Loire. Installation,
              dépannage et rénovation électrique avec un travail soigné.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors duration-200 hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteInfo.phoneLink}
                  className="flex items-center gap-2 text-sm text-navy-400 transition-colors hover:text-electric-400"
                  aria-label={`Appeler le ${siteInfo.phone}`}
                >
                  <Phone size={16} />
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {siteInfo.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-navy-800 pt-6 text-center">
          <p className="text-xs text-navy-500">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
