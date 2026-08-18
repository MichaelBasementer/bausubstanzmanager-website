export interface MarketplaceProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  pricing: string;
  features: string[];
  cta: string;
  comingSoon: boolean;
}

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: "mobile-app",
    name: "BSM Mobile App",
    description: "Die mobile Feldarbeit-App für Baubestands-Assessments auf Android",
    image: "/screenshots/mobile-app-placeholder.svg",
    pricing: "Preis wird in Kürze bekannt gegeben",
    features: [
      "Offline-First Datenerfassung",
      "Foto-Dokumentation",
      "VDI 6202 Sampling Protokolle",
      "Datensynchronisation mit Desktop-App",
    ],
    cta: "Demo bald verfügbar",
    comingSoon: true,
  },
  {
    id: "desktop-app",
    name: "BSM Desktop Manager",
    description: "Die Desktop-Anwendung für umfassende Projektmanagement, Analyse und Report-Generierung",
    image: "/screenshots/desktop-app-placeholder.svg",
    pricing: "Preis wird in Kürze bekannt gegeben",
    features: [
      "Erweiterte Datenanalyse",
      "Automatische Berichterstellung",
      "Datenbank-Management",
      "Excel/PDF Export",
      "Map-Visualisierung",
    ],
    cta: "Demo bald verfügbar",
    comingSoon: true,
  },
  {
    id: "bundle",
    name: "BSM Pro Bundle",
    description: "Mobile App + Desktop Manager als vollständige Lösung für Baubestands-Projekte",
    image: "/screenshots/mobile-app-placeholder.svg",
    pricing: "Preis wird in Kürze bekannt gegeben",
    features: [
      "Alles aus Mobile + Desktop",
      "Prioritäts-Support",
      "Kostenlose Updates",
      "Team-Verwaltung",
      "Erweiterte Synchronisation",
    ],
    cta: "Kontakt aufnehmen",
    comingSoon: true,
  },
];
