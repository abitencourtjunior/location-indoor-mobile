import React from 'react';
import {
  View, StyleSheet, StatusBar,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Icon = ({
  name, color, size, isBack,
}) => (
  <View style={isBack ? styles.iconBack : styles.buttonIcon}>
    <IconFeather name={name} color={color} size={size} />
  </View>
);

const styles = StyleSheet.create({
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBack: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default { Icon };
