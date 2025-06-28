import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { OpaqueColorValue, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { GetThemeValueForKey, Text, YStack } from 'tamagui';

export type SuccessMessageRef = {
  show: (
    inputMessage: string,
    inputBackgroundColor:
      | GetThemeValueForKey<'backgroundColor'>
      | OpaqueColorValue
      | null
      | undefined,
  ) => void;
};

const SuccessMessage = forwardRef((_, ref) => {
  const opacity = useSharedValue(0);
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState<
    GetThemeValueForKey<'backgroundColor'> | OpaqueColorValue | null | undefined
  >('$Orange');

  useImperativeHandle(
    ref,
    () => ({
      show: (
        inputMessage: string,
        inputBackgroundColor:
          | GetThemeValueForKey<'backgroundColor'>
          | OpaqueColorValue
          | null
          | undefined,
      ) => {
        setMessage(inputMessage);
        setBackgroundColor(inputBackgroundColor);
        opacity.value = withTiming(1, { duration: 400 }, () => {
          opacity.value = withDelay(1000, withTiming(0, { duration: 400 }));
        });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[styles.animatedMessageStyle, animatedStyle]}
      pointerEvents="none"
    >
      <YStack
        bg={backgroundColor}
        px="$lg"
        py="$md"
        br={12}
        shadowColor="#000"
        shadowOpacity={0.15}
        shadowRadius={8}
      >
        <Text style={styles.animatedMessageTextStyle}>{message}</Text>
      </YStack>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  animatedMessageStyle: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  animatedMessageTextStyle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});

export default SuccessMessage;
