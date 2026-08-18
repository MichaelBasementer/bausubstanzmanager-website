export interface RoadmapFeature {
  id: string;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  category: string;
  votes: number;
  estimatedQuarter: string;
}

export const roadmapFeatures: RoadmapFeature[] = [
  {
    id: "v1-release",
    title: "v1.0 Release – Desktop & Mobile",
    description: "Desktop Manager v1.0.1 (Windows) und Mobile App v1.0.3 (Android) veröffentlicht – vollständige Schadstofferfassung, QR-Pairing und Sync",
    status: "completed",
    category: "Mobile & Desktop",
    votes: 0,
    estimatedQuarter: "Q2 2026",
  },
  {
    id: "ocr",
    title: "Automatische Texterkennung (OCR)",
    description: "Extrahiere Materialbeschriftungen automatisch mit Handy-Kamera",
    status: "in-progress",
    category: "Mobile",
    votes: 45,
    estimatedQuarter: "Q2 2026",
  },
  {
    id: "3d",
    title: "3D-Visualisierung",
    description: "Interaktive 3D-Pläne mit Probenpunkten und Messungen",
    status: "planned",
    category: "Desktop",
    votes: 38,
    estimatedQuarter: "Q3 2026",
  },
  {
    id: "cloud",
    title: "Cloud-Synchronisation",
    description: "Verschlüsselter Echtzeitabgleich über Azure Deutschland West (Frankfurt) – DSGVO-konform und live seit Mai 2026",
    status: "completed",
    category: "Mobile & Desktop",
    votes: 52,
    estimatedQuarter: "Q2 2026",
  },
  {
    id: "web",
    title: "Web-Portal",
    description: "Zugriff auf Projekte und Reports über Web-Browser",
    status: "planned",
    category: "Web",
    votes: 35,
    estimatedQuarter: "Q3 2026",
  },
  {
    id: "ai-reports",
    title: "AI-gestützte Berichterstellung",
    description: "Automatische Bericht-Generierung mit KI-Zusammenfassungen",
    status: "planned",
    category: "Desktop",
    votes: 28,
    estimatedQuarter: "Q2 2027",
  },
  {
    id: "mobile-offline-sync",
    title: "Erweiterte Offline-Modi",
    description: "Noch bessere Offline-Funktionalität mit Conflict Resolution",
    status: "in-progress",
    category: "Mobile",
    votes: 22,
    estimatedQuarter: "Q3 2026",
  },
];
