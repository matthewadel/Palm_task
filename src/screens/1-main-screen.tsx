import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { YStack } from 'tamagui';

import { ErrorMessage, Loader, Mood, Notes, SleepHours } from '@/components';
import { useGetMoods, useHandleInsights } from '@/hooks';
import { Button, ScreenContainer } from '@/ui';
import SuccessMessage, { SuccessMessageRef } from '@/ui/success-message';

export const MainScreen = () => {
  const [mood, setMood] = useState<number>(1);
  const [sleep, setSleep] = useState(6);
  const [notes, setNotes] = useState('');
  const {
    handleInsights,
    result,
    error: insightsError,
    loading: insightsLoading,
  } = useHandleInsights();

  const { moods, error, loading } = useGetMoods();
  const successRef = useRef<SuccessMessageRef>(null);

  useEffect(() => {
    if (result)
      successRef.current?.show(
        'Success! Try meditating for 10 minutes today',
        '$Orange',
      );
  }, [result]);

  useEffect(() => {
    if (insightsError)
      successRef.current?.show(
        insightsError.message || 'something went wrong',
        '$Error',
      );
  }, [insightsError]);

  return (
    <ScreenContainer
      screenHeaderProps={{ title: 'How Are You Feeling Today?' }}
    >
      <YStack f={1} jc="flex-start" ai="center" p="$sm">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <Mood moods={moods || []} value={mood} onChange={setMood} />
        )}
        <SleepHours value={sleep} onChange={setSleep} />
        <Notes value={notes} onChange={setNotes} />
        <Button
          type="PRIMARY"
          mt="$xl"
          w="100%"
          h={55}
          onPress={() => handleInsights({ notes, mood, sleep })}
          disabled={!notes}
        >
          {insightsLoading ? <ActivityIndicator size="small" /> : 'Submit'}
        </Button>

        <SuccessMessage ref={successRef} />
      </YStack>
    </ScreenContainer>
  );
};
