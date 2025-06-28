import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

import { IScreenContainer } from '@/types';
import { COLORS, ScreenHeader } from '@/ui';

const ScreenContainer = (props: IScreenContainer) => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScreenHeader {...props.screenHeaderProps} />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'android' ? undefined : 'padding'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <YStack f={1} w={'100%'} px="$lg">
            {props.children}
          </YStack>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { ScreenContainer };

const styles = StyleSheet.create({
  safeArea: { height: '100%', backgroundColor: COLORS.White, width: '100%' },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
});
