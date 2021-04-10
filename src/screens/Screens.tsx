import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './Auth/Auth';
import DashboardScreen from './Dashboard/Dashboard';

// Screen stack model, makes nested screens easier to visualise
const Screens = {
  Auth: AuthScreen,
  Dashboard: DashboardScreen,
};

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={Screens.Auth}
      options={{
        headerShown: true,
        // Hide header back text and arrow
        headerLeft: () => null,
      }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Screens.Dashboard}
      options={{
        headerShown: true,
        // Hide header back text and arrow
        headerLeft: () => null,
      }}
    />
  </Stack.Navigator>
);
