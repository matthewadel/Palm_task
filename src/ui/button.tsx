import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as TamaguiButton } from 'tamagui';

import { IButtonProps } from '@/types';

const Button = (props: IButtonProps) => {
  const isSecondary = props?.type === 'SECONDARY';
  return (
    <TamaguiButton
      {...props}
      color={isSecondary ? '$Primary' : '$White'}
      bg={isSecondary ? '$White' : '$Primary'}
      bw={isSecondary ? 1 : 0}
      bc={isSecondary ? '$Primary' : undefined}
      fontWeight="bold"
      br={7}
      px={13}
      py={10}
      disabledStyle={styles.disableButtonStyle}
    />
  );
};

export { Button };

const styles = StyleSheet.create({
  disableButtonStyle: { opacity: 0.5 },
});
