import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue, // animated.value
  withDelay, //  Animated.sequence([Animated.delay(), ...])
  withTiming, // animated.timing
} from 'react-native-reanimated';
import { s } from 'react-native-size-matters';
import { YStack } from 'tamagui';

import { logo } from '@/assets';

const Splash = () => {
  const navigation = useNavigation();
  const fade = useSharedValue(1);

  const navigateToMainScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'MainScreen' }],
      }),
    );
  };

  useEffect(() => {
    fade.value = withDelay(
      1500,
      withTiming(0, { duration: 2000 }, () => {
        runOnJS(navigateToMainScreen)();
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fade, navigation]);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
    transform: [
      {
        scale: fade.value + 0.5,
      },
    ],
  }));
  return (
    <YStack f={1} bg="$Primary" jc="center" ai="center">
      <Animated.Image
        source={logo}
        style={[styles.logo, animatedLogoStyle]}
        resizeMode="contain"
      />
    </YStack>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: s(350),
    height: s(350),
  },
});

export { Splash };
