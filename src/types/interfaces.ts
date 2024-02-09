import { ScreenNames } from './enums';

export interface TranslationsMapping {
  [ScreenNames.DASHBOARD]: {
    description: string;
  };
  [ScreenNames.SECONDARY]: {
    description: string;
  };
}

export interface Translation {
  [translation: string]: TranslationsMapping;
}
