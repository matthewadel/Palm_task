import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import { MainStack } from '@/navigation/main-stack';

import { config } from './tamagui.config';

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
