import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone } from "lucide-react";
import { navigation, siteInfo } from "../data/content";
import Button from "../components/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 shadow-lg shadow-navy-950/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center gap-2 text-white"
          aria-label="Retour à l'accueil"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500">
            <Zap size={22} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold leading-tight">
              {siteInfo.companyName}
            </span>
            <span className="block text-xs text-navy-300">
              {siteInfo.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-navy-200 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            href="#contact"
            variant="primary"
            icon={Phone}
            ariaLabel="Demander un devis"
            className="!px-5 !py-2.5 !text-sm"
          >
            Demander un devis
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-navy-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  href="#contact"
                  variant="primary"
                  icon={Phone}
                  ariaLabel="Demander un devis"
                  className="w-full"
                  onClick={closeMobile}
                >
                  Demander un devis
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
