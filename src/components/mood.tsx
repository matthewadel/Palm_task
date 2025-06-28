import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button, Text, XStack, YStack } from 'tamagui';

const moods = [
  { icon: 'smile-o', value: 'happy', color: '$purple8' },
  { icon: 'meh-o', value: 'neutral', color: '$gray5' },
  { icon: 'frown-o', value: 'sad', color: '$gray5' },
];

export const Mood = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <YStack>
      <Text fontWeight="700" fontSize={18} marginBottom={'$lg'}>
        Mood
      </Text>
      <XStack>
        {moods.map(m => (
          <Button
            key={m.value}
            size="$6"
            // backgroundColor={'$Primary'}
            borderRadius={20}
            onPress={() => onChange(m.value)}
            icon={
              <FontAwesome
                name={m.icon}
                size={32}
                color={value === m.value ? '#fff' : '#888'}
              />
            }
          />
        ))}
      </XStack>
    </YStack>
  );
};
