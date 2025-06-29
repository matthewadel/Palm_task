import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import { XStack } from 'tamagui';

import { IScreenHeader } from '@/types';
import { Heading, ICONS, VectorIcons } from '@/ui';

const ScreenHeader = (props: IScreenHeader) => {
  const Navigation = useNavigation();

  // Check if you can go back
  const canGoBack = Navigation.canGoBack();

  return (
    <XStack w={'100%'} py="$lg" px="$xl" jc="center" ai="center">
      {!!canGoBack && (
        <VectorIcons
          icon={ICONS.MaterialCommunityIcons}
          name="arrow-left"
          size={s(20)}
          onPress={() => Navigation.goBack()}
          style={styles.backButtonStyle}
        />
      )}
      <Heading mb={0}>{props.title}</Heading>
    </XStack>
  );
};

export { ScreenHeader };

const styles = StyleSheet.create({
  backButtonStyle: {
    position: 'absolute',
    top: 'auto',
    bottom: 'auto',
    left: s(10),
  },
});
