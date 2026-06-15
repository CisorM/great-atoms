import enLanding from '../content/landing/en.json';
import esLanding from '../content/landing/es.json';
import type { LandingContent } from '../content/landing/types';
import type { Locale } from './config';

const landingByLocale: Record<Locale, LandingContent> = {
  es: esLanding,
  en: enLanding,
};

export function getLandingContent(locale: Locale): LandingContent {
  return landingByLocale[locale];
}
