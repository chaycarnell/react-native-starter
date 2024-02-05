import { ApolloProvider, SafeArea } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from '@screens';
import { applyStateListeners } from '@utils/activity';
import { applyDeepLinkListener, checkUniversalLinkState } from '@utils/linking';
import {
  applyBackHandleListener,
  navigator,
  removeBackHandleListener,
} from '@utils/navigation';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';

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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeArea>
        <NavigationContainer ref={navigator}>
          <ApolloProvider>
            <Screens />
          </ApolloProvider>
        </NavigationContainer>
      </SafeArea>
    </>
  );
};

export default App;
