import React, { forwardRef, useImperativeHandle } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { YStack } from 'tamagui';

export type SuccessMessageRef = {
  show: () => void;
};

type Props = {
  message: string;
};

const SuccessMessage = forwardRef(({ message }: Props, ref) => {
  const opacity = useSharedValue(0);

  useImperativeHandle(
    ref,
    () => ({
      show: () => {
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
        bg="$Orange"
        px="$lg"
        py="$md"
        br={12}
        shadowColor="#000"
        shadowOpacity={0.15}
        shadowRadius={8}
      >
        <Animated.Text style={styles.animatedMessageTextStyle}>
          {message}
        </Animated.Text>
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
