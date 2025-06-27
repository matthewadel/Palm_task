import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import * as Screens from '@/screens';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Screens.Splash} />
      <Stack.Screen name="MainScreen" component={Screens.MainScreen} />
    </Stack.Navigator>
  );
};
