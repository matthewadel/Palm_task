import React from 'react';
import { Slider, Text, YStack } from 'tamagui';

export const SleepHours = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => {
  return (
    <YStack mt="$4">
      <Text fontWeight="700" fontSize={18} mb="$2">
        Sleep
      </Text>
      <Slider
        min={1}
        max={12}
        step={1}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        size="$4"
        width={220}
        // backgroundColor="$purple8"
        trackStyle={{ backgroundColor: '#eee' }}
        thumbStyle={{ backgroundColor: '$purple8' }}
      />
      <YStack fd="row" jc="space-between" width={220} mt={-10}>
        <Text>1</Text>
        <Text>{value}</Text>
        <Text>12</Text>
      </YStack>
    </YStack>
  );
};
