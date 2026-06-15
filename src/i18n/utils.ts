import { defaultLocale, type Locale, locales } from './config';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  return segment === 'en' ? 'en' : defaultLocale;
}

/** Ruta sin prefijo de idioma (ej. `/`, `/pricing`). */
export function stripLocalePrefix(pathname: string): string {
  const withoutLocale = pathname.replace(/^\/en(?=\/|$)/, '');
  return withoutLocale === '' ? '/' : withoutLocale;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const path = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return path;
  }

  return path === '/' ? '/en' : `/en${path}`;
}

export function getAlternateUrls(
  pathname: string,
  siteUrl: string,
): Record<Locale, string> {
  const base = siteUrl.replace(/\/$/, '');

  return {
    es: `${base}${getLocalizedPath(pathname, 'es')}`,
    en: `${base}${getLocalizedPath(pathname, 'en')}`,
  };
}
