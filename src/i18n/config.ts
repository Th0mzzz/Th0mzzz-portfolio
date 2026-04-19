export const locales = ["en", "pt-BR"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

export const localeLabels: Record<AppLocale, string> = {
  en: "EN",
  "pt-BR": "PT-BR",
};

export function isAppLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}
