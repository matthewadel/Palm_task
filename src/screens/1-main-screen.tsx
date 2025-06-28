import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button, YStack } from 'tamagui';

import { Mood, Notes, SleepHours } from '@/components';
import { ScreenContainer } from '@/ui';

export const MainScreen = () => {
  const [mood, setMood] = useState('happy');
  const [sleep, setSleep] = useState(5);
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    // handle submit logic here
    Alert.alert(`Mood: ${mood}\nSleep: ${sleep}\nNotes: ${notes}`);
  };

  return (
    <ScreenContainer
      screenHeaderProps={{ title: 'How Are You Feeling Today?' }}
    >
      <YStack f={1} jc="flex-start" ai="center" p="$sm">
        <Mood value={mood} onChange={setMood} />
        <SleepHours value={sleep} onChange={setSleep} />
        <Notes value={notes} onChange={setNotes} />
        <Button
          mt="$xl"
          w="100%"
          height={55}
          bg="$Primary"
          color="#fff"
          br={10}
          onPress={handleSubmit}
          fontWeight={'700'}
        >
          Submit
        </Button>
      </YStack>
    </ScreenContainer>
  );
};
