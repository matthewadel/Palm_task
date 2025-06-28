import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { s } from 'react-native-size-matters';
import { styled, Text, XStack, YStack } from 'tamagui';

import { IMood } from '@/types';
import { Button, Heading } from '@/ui';
// Simple loader component

const MoodButton = styled(Button, {
  w: '100%',
  h: '100%',
  br: s(20),
  bw: 2,
  bc: '$Primary',
  variants: {
    selected: {
      true: {
        bg: '$Primary',
      },
      false: {
        bg: '$White',
      },
    },
  },
});

export const Mood = ({
  moods,
  value,
  onChange,
}: {
  moods: IMood[];
  value: number;
  onChange: (v: number) => void;
}) => {
  const scaleAnims = moods?.map(() => useSharedValue(1));
  const animatedStyles = [
    ...scaleAnims.map((shared, _) =>
      useAnimatedStyle(
        () => ({
          transform: [{ scale: shared.value }],
        }),
        [shared],
      ),
    ),
  ];

  const handlePress = (moodValue: number, idx: number) => {
    scaleAnims[idx].value = withSequence(
      withTiming(1.15, { duration: 120 }),
      withTiming(1, { duration: 120 }),
    );
    onChange(moodValue);
  };

  return (
    <YStack w="100%" jc="flex-start" ai="flex-start" space="$md">
      <Heading>Mood</Heading>

      <XStack space="$lg" jc="space-between" w="100%" ai="center">
        {moods?.map((mood, idx) => {
          const isSelected = value === mood.id;

          return (
            <YStack w="25%" space="$sm" ai={'center'}>
              <YStack key={mood.value} ai="center" w="100%" aspectRatio={1}>
                <Animated.View
                  style={[styles.buttonContainerStyle, animatedStyles[idx]]}
                >
                  <MoodButton
                    selected={isSelected}
                    onPress={() => handlePress(mood.id, idx)}
                  >
                    <Text fontSize={s(35)}>{mood.emoji}</Text>
                  </MoodButton>
                </Animated.View>
              </YStack>
              <Text
                fontSize={14}
                fontWeight="600"
                color={isSelected ? '$Primary' : '$Secondary'}
              >
                {mood.label}
              </Text>
            </YStack>
          );
        })}
      </XStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    width: '100%',
    height: '100%',
  },
});
