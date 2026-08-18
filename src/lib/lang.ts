export const supportedLangs = ["de", "en"] as const;
export type SiteLang = (typeof supportedLangs)[number];

export function isValidLang(value: string | undefined): value is SiteLang {
  return !!value && supportedLangs.includes(value as SiteLang);
}
