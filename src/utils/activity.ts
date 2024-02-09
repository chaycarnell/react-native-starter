import { AppState, AppStateStatus } from 'react-native';

import { logger } from './logger';

// Handles listener actions for device state changes
// Define state change actions here
const handleStateChange = (state: AppStateStatus) => {
  if (state === 'active') {
    logger.info('Perform active state actions here');
  }
  if (state === 'background') {
    logger.info('Perform background state actions here');
  }
};

// Applies listener actions to the device state, i.e. 'active', 'background', 'inactive'
// This is useful for example if you want to fetch new data on app reopen from being in background mode
export const applyStateListeners = () =>
  AppState.addEventListener('change', handleStateChange);
