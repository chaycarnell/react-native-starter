import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { ApolloProvider, SafeArea } from '@components';
import {
  setNavigator,
  applyBackHandleListener,
  removeBackHandleListener,
} from '@utils/navigation';
import {
  applyDeepLinkListener,
  removeDeepLinkListener,
  checkUniversalLinkState,
} from '@utils/linking';
import { applyStateListeners, removeStateListeners } from '@utils/activity';
import { Screens } from '@screens';

// Optimize memory usage and performance by bringing the native navigation component (UIViewController for iOS, and FragmentActivity for Android)
enableScreens();

const App = () => {
  // Set reference to navigation stack for use in nav util functions
  const setRef = (navRef: NavigationContainerRef) => setNavigator(navRef);

  // Handle on app launch handlers here
  useEffect(() => {
    applyStateListeners();
    applyDeepLinkListener();
    applyBackHandleListener();
    checkUniversalLinkState();
    RNBootSplash.hide({ fade: true });
    return () => {
      removeStateListeners();
      removeDeepLinkListener();
      removeBackHandleListener();
    };
  }, []);

  return (
    <ApolloProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeArea>
        <NavigationContainer ref={setRef}>
          <Screens />
        </NavigationContainer>
      </SafeArea>
    </ApolloProvider>
  );
};

export default App;
