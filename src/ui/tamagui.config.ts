import { defaultConfig } from '@tamagui/config/v4';
import { s } from 'react-native-size-matters';
import { createTamagui } from 'tamagui';

const shorthands = {
  ac: 'alignContent',
  ai: 'alignItems',
  jc: 'justifyContent',
  mt: 'marginTop',
  my: 'marginVertical',
  mb: 'marginBottom',
  p: 'padding',
  pb: 'paddingBottom',
  py: 'paddingVertical',
  px: 'paddingHorizontal',
  als: 'alignSelf',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bw: 'borderWidth',
  bc: 'borderColor',
  bg: 'backgroundColor',
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  w: 'width',
  btrr: 'borderTopRightRadius',
  f: 'flex',
} as const;

export const config = createTamagui({
  ...defaultConfig,
  shorthands,
  tokens: {
    size: { sm: s(8), true: s(10), md: s(12), lg: s(12), xl: s(16) },
    space: { sm: s(4), md: s(8), true: s(10), lg: s(12), xl: s(16) },
    radius: { sm: s(4), md: s(8), true: s(10), lg: s(12), xl: s(16) },
    color: {
      Primary: '#7652F1',
      White: '#FFFFFF',
      Dark: '#000000',
      Red: '#FF0000',
      Error: '#FF6767',
      Green: '#00FF00',
      Orange: '#FFAA71',
      PlaceholderTextColor: '#A7A7A7',
      Secondary: '#A7A7A7',
      BorderColor: '#A7A7A7',
    },
    zIndex: { sm: 1, md: 5, true: 10, lg: 100 },
  },
});

type OurConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
