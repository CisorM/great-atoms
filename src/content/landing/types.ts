export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface LandingMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface LandingHero {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface LandingFeatures {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface LandingCta {
  title: string;
  description: string;
  button: string;
}

export interface LandingFooter {
  tagline: string;
  copyright: string;
  links: NavLink[];
}

export interface LandingContent {
  meta: LandingMeta;
  nav: {
    features: string;
    contact: string;
    cta: string;
  };
  hero: LandingHero;
  features: LandingFeatures;
  cta: LandingCta;
  footer: LandingFooter;
}
