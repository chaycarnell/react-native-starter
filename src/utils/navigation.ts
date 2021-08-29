import { BackHandler } from 'react-native';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigator = createNavigationContainerRef();

export type RootStackParamList = {
  Auth: {};
  Dashboard: {};
};

// Returns the current navigation stack
export const getNavigation = () => navigator;

// Custom navigate handler allowing stack to be reset in props
export const navigate = (
  screenName: string,
  params: any,
  resetStack: boolean | undefined = false,
) => {
  const navigation = getNavigation();
  // Prevent navigation actions if stack does not exist
  if (!navigation) return null;
  if (resetStack)
    return navigation.reset({
      index: 0,
      routes: [{ name: screenName, params }],
    });
  // @ts-expect-error
  return navigation.navigate(screenName, params);
};

// Returns a boolean based on if the user can go back further than the current screen
export const canGoBack = () => getNavigation().canGoBack();

// Prevent hardware back if back options not available
// This prevents the app closing in Android
const handleHardwareBack = () => !canGoBack();

// Handles applying hardware back action event listener
export const applyBackHandleListener = () =>
  BackHandler.addEventListener('hardwareBackPress', handleHardwareBack);

// Handles removing hardware back action event listener
export const removeBackHandleListener = () =>
  BackHandler.removeEventListener('hardwareBackPress', handleHardwareBack);
