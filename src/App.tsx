import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { ApolloProvider, SafeArea } from '@components';
import {
  navigator,
  applyBackHandleListener,
  removeBackHandleListener,
} from '@utils/navigation';
import { applyDeepLinkListener, checkUniversalLinkState } from '@utils/linking';
import { applyStateListeners } from '@utils/activity';
import { Screens } from '@screens';

// Optimize memory usage and performance by bringing the native navigation component (UIViewController for iOS, and FragmentActivity for Android)
enableScreens();

const App = () => {
  // Handle on app launch handlers here
  useEffect(() => {
    const appStateListener = applyStateListeners();
    const linkingListener = applyDeepLinkListener();
    applyBackHandleListener();
    checkUniversalLinkState();
    RNBootSplash.hide({ fade: true });
    return () => {
      linkingListener.remove();
      appStateListener.remove();
      removeBackHandleListener();
    };
  }, []);

  return (
    <ApolloProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeArea>
        <NavigationContainer ref={navigator}>
          <Screens />
        </NavigationContainer>
      </SafeArea>
    </ApolloProvider>
  );
};

export default App;
