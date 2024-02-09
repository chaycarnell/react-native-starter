import 'intl-pluralrules';

import { Resource } from '@types';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

import de from './de';
import en from './en';

// Initialise translation mappings
const resources: Resource = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

// Initialise translation language from device settings
export const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
  lng: deviceLanguage.substr(0, 2),
});

export default i18n;
