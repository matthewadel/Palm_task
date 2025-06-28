import React from 'react';
import { Text, YStack } from 'tamagui';

export const ErrorMessage = ({ error }: { error: any }) => (
  <YStack w="100%" ai="center" jc="center" py="$lg">
    <Text color="$Red" fontWeight="bold">
      Failed to load moods
    </Text>
    <Text color="$Red" mt="$sm">
      {error?.message || 'Unknown error'}
    </Text>
  </YStack>
);
