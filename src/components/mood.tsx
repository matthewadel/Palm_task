import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { s } from 'react-native-size-matters';
import { Button, styled, Text, XStack, YStack } from 'tamagui';

const moods = [
  {
    value: 'happy',
    label: 'Happy',
    emoji: '😊',
  },
  {
    value: 'neutral',
    label: 'Neutral',
    emoji: '😐',
  },
  {
    value: 'sad',
    label: 'Sad',
    emoji: '😢',
  },
];

const MoodButton = styled(Button, {
  w: '100%',
  height: '100%',
  br: s(20),
  borderTopWidth: 2,
  borderRightWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,

  variants: {
    selected: {
      true: {
        bg: '$Primary',
        borderColor: '$Primary',
      },
      false: {
        bg: '$White',
        borderColor: '$BorderColor',
      },
    },
  } as const,
});

export const Mood = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const scaleAnims = moods.map(() => useSharedValue(1));

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

  const handlePress = (moodValue: string, idx: number) => {
    scaleAnims[idx].value = withSequence(
      withTiming(1.15, { duration: 120 }),
      withTiming(1, { duration: 120 }),
    );
    onChange(moodValue);
  };

  return (
    <YStack w="100%" jc="flex-start" ai="flex-start" space="$md">
      <Text
        fontWeight={'700'}
        fontSize={s(20)}
        color="$Dark"
        textAlign="center"
      >
        Mood
      </Text>

      <XStack space="$lg" jc="space-between" w="100%" ai="center">
        {moods.map((mood, idx) => {
          const isSelected = value === mood.value;

          return (
            <YStack w="25%" space="$sm" ai={'center'}>
              <YStack key={mood.value} ai="center" w="100%" aspectRatio={1}>
                <Animated.View
                  style={[styles.buttonContainerStyle, animatedStyles[idx]]}
                >
                  <MoodButton
                    selected={isSelected}
                    onPress={() => handlePress(mood.value, idx)}
                  >
                    <Text fontSize={s(40)}>{mood.emoji}</Text>
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
