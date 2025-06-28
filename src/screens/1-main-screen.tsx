import React, { useState } from 'react';
import { Alert } from 'react-native';
import { YStack } from 'tamagui';

import { Mood } from '@/components';
import { ScreenContainer } from '@/ui';

export const MainScreen = () => {
  const [mood, setMood] = useState('happy');
  const [sleep, setSleep] = useState(7);
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
        {/* <SleepHours value={sleep} onChange={setSleep} /> */}
        {/* <Notes value={notes} onChange={setNotes} /> */}
        {/* <Button
          mt="$6"
          size="$6"
          // backgroundColor="$purple8"
          color="#fff"
          borderRadius={20}
          width={260}
          onPress={handleSubmit}
        >
          Submit
        </Button> */}
      </YStack>
    </ScreenContainer>
  );
};
