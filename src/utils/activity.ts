import { AppState } from 'react-native';

// Handles listener actions for device state changes
// Define state change actions here
const handleStateChange = (state: string) => {
  if (state === 'active') console.log('Perform active state actions here');
  if (state === 'background')
    console.log('Perform background state actions here');
};

// Applies listener actions to the device state, i.e. 'active', 'background', 'inactive'
// This is useful for example if you want to fetch new data on app reopen from being in background mode
export const applyStateListeners = () =>
  AppState.addEventListener('change', handleStateChange);

// Removes listener actions to the device state
export const removeStateListeners = () =>
  AppState.removeEventListener('change', handleStateChange);
