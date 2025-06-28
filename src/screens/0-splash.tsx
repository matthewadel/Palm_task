import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';
import { YStack } from 'tamagui';

import { logo } from '@/assets';
import { COLORS } from '@/ui';

const Splash = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fadeOut = () => {
      Animated.sequence([
        // Hold for 2 seconds
        Animated.delay(1000),
        // Then fade out over 1 second
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate to main screen after animation completes
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'MainScreen' }],
          }),
        );
      });
    };

    fadeOut();
  }, [fadeAnim, navigation]);

  return (
    <YStack f={1} bg="$Primary" jc="center" ai="center">
      <Animated.Image
        source={logo}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [
              {
                scale: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
        ]}
        resizeMode="contain"
      />
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: s(400),
    height: s(400),
  },
});

export { Splash };
