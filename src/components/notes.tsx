import React from 'react';
import { Input, Text, YStack } from 'tamagui';

export const Notes = ({
  value = '',
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <YStack mt="$4">
      <Text fontWeight="700" fontSize={18} mb="$2">
        Notes
      </Text>
      <Input
        placeholder="Add any notes..."
        value={value}
        onChangeText={onChange}
        width={260}
        height={48}
        // backgroundColor="$gray2"
        borderRadius={12}
        px="$3"
        fontSize={16}
      />
    </YStack>
  );
};
