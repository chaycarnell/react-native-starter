import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import en from './en';

interface Translation {
  [name: string]: string | Translation;
}

interface Resources {
  en: {
    translation: Translation;
  };
  de?: {
    translation?: Translation;
  };
}

// Initialise translation mappings
const resources: Resources = {
  en: {
    translation: {
      ...en,
    },
  },
  de: {
    translation: {},
  },
};

// Initialise translation language from device settings
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

// @ts-ignore
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
  lng: deviceLanguage,
});

export default i18n;
