import * as Sentry from '@sentry/react-native';
import env from 'react-native-config';

/**
 * This util is intended to make integration with Sentry easier for your React Native application
 * Please note:
 * You will need to ensure both the Android and iOS sentry.properties files have been configured with your
 * Sentry projects corresponding property values. These can be obtained from your Sentry project dashboard.
 *
 * You should also ensure that your project DSN has been set as can be found in your projects dashboard.
 */

// Set reference to app env, default to empty string
const appEnv = (env.APP_ENV && env.APP_ENV.toLowerCase()) || '';

// Array of reference environment names where Sentry should be active
const activeEnvs = ['release', 'prod', 'production'];

// Initialise Sentry project for crash and performance reporting
export const initialiseSentry = () => {
  try {
    // Disable sentry initialisation in debug mode
    if (activeEnvs.includes(appEnv)) Sentry.init({ dsn: env.SENTRY_DSN });
  } catch (e) {
    if (!env.SENTRY_DSN)
      throw new Error('.ENV is missing valud SENTRY_DSN value!');
    throw new Error(e.message);
  }
};
