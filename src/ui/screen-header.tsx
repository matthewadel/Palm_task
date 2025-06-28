import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';

import { IScreenHeader } from '@/types';
import { ICONS, Text, VectorIcons, View } from '@/ui';

const ScreenHeader = (props: IScreenHeader) => {
  const Navigation = useNavigation();

  // Check if you can go back
  const canGoBack = Navigation.canGoBack();

  return (
    <View style={styles.container}>
      {!!canGoBack && (
        <VectorIcons
          icon={ICONS.MaterialCommunityIcons}
          name="arrow-left"
          size={s(30)}
          onPress={() => Navigation.goBack()}
          style={styles.backButtonStyle}
        />
      )}
      <Text style={styles.headerTextStyle}>{props.title}</Text>
    </View>
  );
};

export { ScreenHeader };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: vs(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(15),
  },
  headerTextStyle: { fontWeight: 'bold', fontSize: s(20) },
  backButtonStyle: { position: 'absolute', left: s(15) },
});
