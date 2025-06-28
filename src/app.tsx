import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import { MainStack } from '@/navigation/main-stack';

import { config } from './ui/tamagui.config';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </TamaguiProvider>
  );
};

export default App;
