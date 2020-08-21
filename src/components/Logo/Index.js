import React from 'react';
import {
  Text, StyleSheet, View, Image,
} from 'react-native';
import logo from '../../assets/logo_def.png';

const Logo = () => (
  <View style={styles.main}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.title}>LocIndoor</Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },

  title: {
    color: '#322153',
    fontSize: 34,
    fontFamily: 'Ubuntu-Bold',
    fontWeight: '700',
    maxWidth: 260,
    marginTop: 28,
    marginLeft: 8,
  },

  logo: {
    width: 100,
    height: 100,
  },
});

export default Logo;
