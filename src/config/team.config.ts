export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Kelle",
    title: "Founder & Developer",
    bio: "M.Sc. Student Environmental/Civil Engineering an der TU Darmstadt. Spezialisiert auf Baubestands-Assessments und Deconstruction Planning. Entwickler von BSM BausubstanzManager.",
    photo: "/team/kelle.jpg",
    email: "support@bausubstanzmanager.de",
    linkedin: "https://linkedin.com",
  },
];
