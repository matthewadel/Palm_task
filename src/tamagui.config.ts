import { defaultConfig } from '@tamagui/config/v4';
import { s } from 'react-native-size-matters';
import { createTamagui } from 'tamagui';

const shorthands = {
  ac: 'alignContent',
  ai: 'alignItems',
  jc: 'justifyContent',
  p: 'padding',
  als: 'alignSelf',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bg: 'backgroundColor',
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  f: 'flex',
  // ...
} as const;

export const config = createTamagui({
  // tokens work like CSS Variables (and compile to them on the web)
  // accessible from anywhere, never changing dynamically:
  ...defaultConfig,
  shorthands,
  tokens: {
    // width="$sm"
    size: { sm: s(8), true: s(10), md: s(12), lg: s(20) },
    // margin="$sm"
    space: { sm: s(4), md: s(8), true: s(10), lg: s(12) },
    // radius="$none"
    radius: { sm: s(4), md: s(8), true: s(10), lg: s(12) },
    color: {
      Primary: '#7652F1',
      White: '#FFFFFF',
      Dark: '#000000',
      Red: '#FF0000',
      Error: '#FF6767',
      Green: '#00FF00',
      PlaceholderTextColor: '#A7A7A7',
      BorderColor: '#909090',
    },
    zIndex: { sm: 1, md: 5, true: 10, lg: 100 },
  },
});

// now, make your types flow nicely back to your `tamagui` import:
type OurConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
