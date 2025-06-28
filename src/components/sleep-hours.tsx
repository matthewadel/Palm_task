import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import { styled, Text, XStack, YStack } from 'tamagui';

import { Heading } from '@/ui';

const StyledText = styled(Text, {
  fontSize: 15,
  color: '#888',
  fontWeight: '700',
});

const sliderProps = {
  minimumValue: 0,
  maximumValue: 12,
  step: 1,
};

export const SleepHours = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => {
  return (
    <YStack w={'100%'} mt={s(30)} space="$md">
      <Heading>Sleep</Heading>

      <YStack w={'100%'}>
        <Slider
          minimumValue={sliderProps.minimumValue}
          maximumValue={sliderProps.maximumValue}
          step={sliderProps.step}
          value={value}
          onValueChange={onChange}
          minimumTrackTintColor="#7c4dff"
          maximumTrackTintColor="#e5e5f7"
          thumbTintColor="#7c4dff"
          style={styles.sliderStyle}
        />
        <XStack
          w={'100%'}
          mt={'$sm'}
          jc="space-between"
          ai="center"
          paddingLeft={7}
        >
          <StyledText>{sliderProps.minimumValue}</StyledText>
          <StyledText color={'$Primary'}>{value}</StyledText>
          <StyledText>{sliderProps.maximumValue}</StyledText>
        </XStack>
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: '100%',
    height: s(36),
  },
});
