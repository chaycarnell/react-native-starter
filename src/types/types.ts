import { ScreenNames } from './enums';
import { Translation } from './interfaces';

export type SupportedLocale = 'en' | 'de';

export type Resource = Record<SupportedLocale, Translation>;

export type RootStackParamList = {
  [ScreenNames.DASHBOARD]: {};
  [ScreenNames.SECONDARY]: {};
};
