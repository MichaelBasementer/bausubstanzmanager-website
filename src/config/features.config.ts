export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "mobile" | "desktop" | "both";
  platform: "mobile" | "desktop" | "both";
}

export const featuresDe: Feature[] = [
  {
    id: "probenerfassung",
    title: "Probenerfassung",
    description: "Materialproben mit automatischer ID, Tiefe, Schicht, Schadstoffklassifizierung und Koordinaten direkt auf dem Grundriss verorten.",
    icon: "🔬",
    category: "both",
    platform: "both",
  },
  {
    id: "sondierungserfassung",
    title: "Sondierungserfassung",
    description: "Bohrpunkte und Kernbohrungen mit Tiefenprofil, Schichtbeschreibung und Koordinaten erfassen. Normkonform nach VDI 6202.",
    icon: "⛏️",
    category: "both",
    platform: "both",
  },
  {
    id: "raumerfassung",
    title: "Raumerfassung",
    description: "Räume mit Maßen, Materialien, Zustandsbeschreibung und Schadstoffbelastung strukturiert aufnehmen — direkt verknüpft mit dem Grundriss.",
    icon: "🏠",
    category: "both",
    platform: "both",
  },
  {
    id: "mengenermittlung",
    title: "Mengenermittlung",
    description: "Automatische Berechnung von Flächen, Volumen und Mengen aus den Raumdaten. Exportierbar als Excel oder PDF für Ausschreibungen.",
    icon: "📐",
    category: "desktop",
    platform: "desktop",
  },
  {
    id: "planerstellung",
    title: "Planerstellung",
    description: "Eigene Grundrisse als Planvorlage hochladen, Proben- und Raummarker setzen und fertige Pläne mit Legende exportieren.",
    icon: "🗺️",
    category: "both",
    platform: "both",
  },
  {
    id: "fotodokumentation",
    title: "Fotodokumentation",
    description: "Fotos direkt mit Probe, Raum oder Sondierung verknüpfen. Automatischer Zeitstempel und GPS-Tag. Kein manuelles Zuordnen mehr.",
    icon: "📷",
    category: "mobile",
    platform: "mobile",
  },
  {
    id: "projektmanagement",
    title: "Projektmanagement",
    description: "Mehrere Projekte parallel verwalten, Bauvorhaben anlegen, Status tracken und das Team koordinieren — auf Desktop und Tablet.",
    icon: "📁",
    category: "both",
    platform: "both",
  },
  {
    id: "probenmanagement",
    title: "Probenmanagement",
    description: "Vollständige Übersicht aller Proben mit Labor-ID, Einreichungsstatus, Analyseergebnissen und Grenzwertüberschreitungen.",
    icon: "🗂️",
    category: "both",
    platform: "both",
  },
  {
    id: "labor-workflow",
    title: "Labor-Workflow",
    description: "Proben ans Labor übergeben, Laborergebnisse einpflegen, Grenzwerte prüfen und Auswertung direkt in den Bericht übernehmen.",
    icon: "🧪",
    category: "desktop",
    platform: "desktop",
  },
];

export const featuresEn: Feature[] = [
  {
    id: "probenerfassung",
    title: "Sample Collection",
    description: "Capture material samples with automatic ID, depth, layer, pollutant classification and coordinates — placed directly on the floor plan.",
    icon: "🔬",
    category: "both",
    platform: "both",
  },
  {
    id: "sondierungserfassung",
    title: "Survey / Drilling Capture",
    description: "Record boreholes and core drillings with depth profiles, layer descriptions and coordinates. Compliant with VDI 6202.",
    icon: "⛏️",
    category: "both",
    platform: "both",
  },
  {
    id: "raumerfassung",
    title: "Room Capture",
    description: "Structured room surveys covering dimensions, materials, condition and pollutant load — directly linked to the floor plan.",
    icon: "🏠",
    category: "both",
    platform: "both",
  },
  {
    id: "mengenermittlung",
    title: "Quantity Estimation",
    description: "Automatic calculation of areas, volumes and quantities from room data. Exportable as Excel or PDF for tendering.",
    icon: "📐",
    category: "desktop",
    platform: "desktop",
  },
  {
    id: "planerstellung",
    title: "Plan Creation",
    description: "Upload floor plans as templates, place sample and room markers, and export finished plans with legends.",
    icon: "🗺️",
    category: "both",
    platform: "both",
  },
  {
    id: "fotodokumentation",
    title: "Photo Documentation",
    description: "Link photos directly to samples, rooms or drillings. Automatic timestamp and GPS tag — no manual assignment needed.",
    icon: "📷",
    category: "mobile",
    platform: "mobile",
  },
  {
    id: "projektmanagement",
    title: "Project Management",
    description: "Manage multiple projects in parallel, create construction sites, track status and coordinate the team — on desktop and tablet.",
    icon: "📁",
    category: "both",
    platform: "both",
  },
  {
    id: "probenmanagement",
    title: "Sample Management",
    description: "Full overview of all samples with lab ID, submission status, analysis results and limit exceedances.",
    icon: "🗂️",
    category: "both",
    platform: "both",
  },
  {
    id: "labor-workflow",
    title: "Lab Workflow",
    description: "Submit samples to the lab, enter results, check against limits and pull the evaluation directly into your report.",
    icon: "🧪",
    category: "desktop",
    platform: "desktop",
  },
];

export const features: Feature[] = featuresDe;

export const getFeaturesForLang = (lang: "de" | "en"): Feature[] =>
  lang === "en" ? featuresEn : featuresDe;
