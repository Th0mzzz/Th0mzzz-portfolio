import {cookies, headers} from "next/headers";
import {getRequestConfig} from "next-intl/server";
import {defaultLocale, isAppLocale} from "./config";

function detectLocaleFromHeader(acceptLanguage: string | null): "en" | "pt-BR" {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const languageTags = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((part) => part.split(";")[0].trim());

  if (languageTags.some((tag) => tag === "pt" || tag.startsWith("pt-"))) {
    return "pt-BR";
  }

  return "en";
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value;

  const locale =
    localeFromCookie && isAppLocale(localeFromCookie)
      ? localeFromCookie
      : detectLocaleFromHeader((await headers()).get("accept-language"));

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
