import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '@types';
import React from 'react';

import DashboardScreen from './Dashboard/Dashboard';
import SecondaryScreen from './Secondary/Secondary';

const Stack = createStackNavigator();

const defaultOptions = {
  headerShown: true,
  // Hide header back text and arrow
  headerLeft: () => null,
};

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.DASHBOARD}
      component={DashboardScreen}
      options={defaultOptions}
    />
    <Stack.Screen
      name={ScreenNames.SECONDARY}
      component={SecondaryScreen}
      options={defaultOptions}
    />
  </Stack.Navigator>
);
