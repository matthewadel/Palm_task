import React from 'react';
import { s } from 'react-native-size-matters';
import { Text } from 'tamagui';

export const Heading = (
  props: React.ComponentProps<typeof Text>,
): React.JSX.Element => {
  return (
    <Text
      fontWeight={'700'}
      fontSize={s(20)}
      color="$Dark"
      als="flex-start"
      mb="$lg"
      textAlign="center"
      {...props}
    />
  );
};
