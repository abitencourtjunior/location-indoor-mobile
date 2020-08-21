import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Default from '../Default/Index';

const Settings = () => (
  <Default buttonBack>

    <Text style={styles.pointName}> Usuário A</Text>
    <Text style={styles.pointItems}> Usuário A</Text>

    <View style={styles.address}>
      <Text style={styles.addressTitle}> Teste</Text>
      <Text style={styles.addressContent}> Teste</Text>
    </View>
  </Default>
);

const styles = StyleSheet.create({

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu-Bold',
    fontWeight: '700',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80',
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80',
  },

});

export default Settings;
