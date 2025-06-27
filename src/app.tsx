import { NavigationContainer } from '@react-navigation/native';
import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui, TamaguiProvider } from '@tamagui/core';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainStack } from '@/navigation/main-stack';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default App;
