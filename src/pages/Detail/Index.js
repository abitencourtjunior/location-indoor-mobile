import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Default from '../Default/Index';

const Detail = () => (
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
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 42,
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

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

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
  },
});

export default Detail;
