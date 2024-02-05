import { Linking } from 'react-native';
import { logger } from './logger';

// Handles opening a link
export const openLink = (link: string) => Linking.openURL(link);

// Function to handle linking actions of application
// Define linking actions here
export const handleLinking = async (event: string | { url: string }) =>
  logger.info('Linking event: ', event);

// Handle universal linking where app was closed and launched from an associated URL
export const checkUniversalLinkState = () =>
  Linking.getInitialURL()
    .then(url => {
      if (url) {
        handleLinking(url);
      }
    })
    .catch((e: Error) => logger.info('Linking error: ', e));

// Handles deep linking or universal links where app is woken up from background
export const applyDeepLinkListener = () =>
  Linking.addEventListener('url', handleLinking);
