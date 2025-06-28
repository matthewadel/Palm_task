import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, YStack } from 'tamagui';

export const Loader = () => (
  <YStack w="100%" ai="center" jc="center" py="$lg">
    <ActivityIndicator size="large" color="$Primary" />
    <Text mt="$md">Loading moods...</Text>
  </YStack>
);
