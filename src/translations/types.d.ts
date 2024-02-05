export interface TranslationsMapping {
  AUTH: {
    DESC: string;
  };
  DASHBOARD: {
    DESC: string;
  };
}

export type SupportedLocale = 'en' | 'de';

export interface Translation {
  [translation: string]: TranslationsMapping;
}

export type Resource = Record<SupportedLocale, Translation>;
