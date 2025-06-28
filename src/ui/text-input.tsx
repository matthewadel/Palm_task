import { digitsArToEn } from '@persian-tools/persian-tools';
import React, { Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { s } from 'react-native-size-matters';
import { Input, InputProps } from 'tamagui';

const TextInput = React.forwardRef(
  (props?: InputProps, ref?: Ref<RNTextInput>) => {
    const onChangeText = (text: string) => {
      if (props?.onChangeText)
        if (
          props.keyboardType === 'number-pad' ||
          props.keyboardType === 'numeric'
        )
          props.onChangeText(digitsArToEn(text || '')?.replace(/\D/g, ''));
        else props.onChangeText(text);
    };
    return (
      <Input
        ref={ref as any}
        w={'100%'}
        h={s(100)}
        verticalAlign="top"
        br={12}
        px="$md"
        fontSize={s(13)}
        {...props}
        onChangeText={onChangeText}
      />
    );
  },
);

export { TextInput };
