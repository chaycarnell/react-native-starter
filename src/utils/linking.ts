import { Linking } from 'react-native';

// Handles opening a link
export const openLink = (link: string) => Linking.openURL(link);

// Function to handle linking actions of application
// Define linking actions here
export const handleLinking = async (event: any) =>
  console.log('Linking event: ', event);

// Handle universal linking where app was closed and launched from an associated URL
export const checkUniversalLinkState = () =>
  Linking.getInitialURL()
    .then((url: any) => {
      if (url) handleLinking(url);
    })
    .catch((e: any) => console.log('Linking error: ', e));

// Handles deep linking or universal links where app is woken up from background
export const applyDeepLinkListener = () =>
  Linking.addEventListener('url', handleLinking);
