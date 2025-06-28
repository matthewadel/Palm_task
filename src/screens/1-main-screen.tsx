import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, YStack } from 'tamagui';

import { Mood, Notes, SleepHours } from '@/components';
import { ScreenContainer } from '@/ui';
import SuccessMessage, { SuccessMessageRef } from '@/ui/success-message';

export const MainScreen = () => {
  const [mood, setMood] = useState('happy');
  const [sleep, setSleep] = useState(5);
  const [notes, setNotes] = useState('');

  const successRef = useRef<SuccessMessageRef>(null);

  const handleSubmit = () => {
    // handle submit logic here
    successRef.current?.show();
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
          disabled={true}
          disabledStyle={styles.disableButtonStyle}
        >
          Submit
        </Button>

        <SuccessMessage
          ref={successRef}
          message="Success! Try meditating for 10 minutes today"
        />
      </YStack>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  disableButtonStyle: { opacity: 0.5 },
});
