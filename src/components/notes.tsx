import React from 'react';
import { s } from 'react-native-size-matters';
import { Input, Text, YStack } from 'tamagui';

export const Notes = ({
  value = '',
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <YStack w="100%" mt={'$lg'}>
      <Text fontWeight="700" fontSize={18} mb="$lg">
        Notes
      </Text>
      <Input
        multiline
        placeholder="Add any notes..."
        value={value}
        onChangeText={onChange}
        w={'100%'}
        height={s(100)}
        textAlignVertical="top"
        br={12}
        px="$md"
        fontSize={16}
      />
    </YStack>
  );
};
