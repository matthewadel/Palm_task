import React from 'react';
import { s } from 'react-native-size-matters';
import { YStack } from 'tamagui';

import { Heading, TextInput } from '@/ui';

export const Notes = ({
  value = '',
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <YStack mt={s(30)} w="100%">
      <Heading>Notes</Heading>
      <TextInput
        multiline
        placeholder="Add any notes..."
        value={value}
        onChangeText={onChange}
      />
    </YStack>
  );
};
